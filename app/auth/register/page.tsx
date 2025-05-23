"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import DOMPurify from "dompurify";
import { registerUser } from "@/app/utils/api";
import toast from "react-hot-toast";
import { useEffect } from "react";

const schema = z
  .object({
    fullName: z.string().min(2, "الاسم الكامل يجب أن يكون على الأقل حرفين"),
    email: z.string().email("صيغة البريد الإلكتروني غير صحيحة"),
    phone: z
      .string()
      .min(10, "رقم هاتف العضو يجب أن يكون 10 أرقام")
      .max(10, "رقم هاتف العضو يجب أن يكون 10 أرقام")
      .regex(/^\d+$/, "رقم الهاتف يجب أن يحتوي على أرقام فقط"),
    role: z.enum(["تقني", "شرعي", "مصمم", "مشرف فريق"]).default("مشرف فريق"),
    hasTeam: z.boolean(),
    team: z
      .array(
        z.object({
          fullName: z.string().min(2, "اسم العضو يجب أن يكون على الأقل حرفين"),
          email: z.string().email("صيغة بريد العضو غير صحيحة"),
          phone: z
            .string()
            .min(10, "رقم هاتف العضو يجب أن يكون 10 أرقام")
            .max(10, "رقم هاتف العضو يجب أن يكون 10 أرقام")
            .regex(/^\d+$/, "رقم الهاتف يجب أن يحتوي على أرقام فقط"),
          role: z.enum(["تقني", "شرعي", "مصمم", "مشرف فريق"]).default("تقني"),
        })
      )
      .optional(),
    hasIdea: z.boolean(),
    ideaDescription: z
      .string()
      .min(5, "وصف الفكرة يجب أن يكون على الأقل 5 أحرف")
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.hasTeam) {
      const teamLength = data.team?.length ?? 0;
      if (teamLength < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "يجب عليك إضافة على الأقل ٣ أعضاء للفريق.",
          path: ["team"],
        });
      } else if (teamLength > 4) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "لا يمكنك إضافة أكثر من ٥ أعضاء للفريق.",
          path: ["team"],
        });
      }
    }
  });

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { hasTeam: false, hasIdea: false, team: [] },
  });

  const { fields, append, remove } = useFieldArray({ name: "team", control });
  const hasTeam = watch("hasTeam");
  const hasIdea = watch("hasIdea");

  useEffect(() => {
    if (hasTeam && fields.length === 0) {
      append({ fullName: "", email: "", phone: "", role: "تقني" });
    }
  }, [hasTeam, fields.length, append]);

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const sanitizedData = {
      ...data,
      fullName: DOMPurify.sanitize(data.fullName),
      email: DOMPurify.sanitize(data.email),
      phone: DOMPurify.sanitize(data.phone),
      role: DOMPurify.sanitize(data.role),
      ideaDescription: data.ideaDescription
        ? DOMPurify.sanitize(data.ideaDescription)
        : undefined,
      team: data.team?.map((member) => ({
        fullName: DOMPurify.sanitize(member.fullName),
        email: DOMPurify.sanitize(member.email),
        phone: DOMPurify.sanitize(member.phone),
        role: member.role,
      })),
    };

    const result = await registerUser(sanitizedData);
    if (result.success) {
      toast.success(result.message || "تم التسجيل بنجاح!");
    } else {
      toast.error(result.message || "حدث خطأ أثناء التسجيل!");
    }
  };

  return (
    <div className=" h-full bg-primary  items-center justify-center pt-9">
      <div className="items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" max-w-2xl mx-auto p-8 bg-secondary rounded-lg shadow-lg text-right space-y-6"
        >
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            التسجيل في الهاكاثون
          </h2>

          <div className="space-y-1">
            <label className="block text-primary">الاسم الكامل</label>
            <input
              {...register("fullName")}
              className="w-full p-3 rounded-md border border-tertiary focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="ادخل اسمك الكامل"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-primary">البريد الإلكتروني</label>
            <input
              {...register("email")}
              className="w-full p-3 rounded-md border border-tertiary focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="ادخل بريدك الإلكتروني"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-primary">رقم الهاتف</label>
            <input
              {...register("phone")}
              className="w-full p-3 rounded-md border border-tertiary focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="ادخل رقم هاتفك"
              inputMode="numeric"
              pattern="\d*"
              maxLength={10}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/\D/g, "")
                  .slice(0, 10);
              }}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <label className="block text-primary">الدور</label>
            <select
              {...register(`role`)}
              className="w-full p-2 rounded-md border border-tertiary focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="مشرف فريق">مشرف فريق</option>
              <option value="تقني">تقني</option>
              <option value="شرعي">شرعي</option>
              <option value="مصمم">مصمم</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <label className="text-primary">هل لديك فريق؟</label>
            <input
              type="checkbox"
              {...register("hasTeam")}
              className="w-5 h-5"
            />
          </div>

          {hasTeam && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-primary">
                معلومات أعضاء الفريق
              </h2>
              <p className="text-sm text-red-500">
                يجب أن يحتوي الفريق على ٣ أعضاء على الأقل، ويمكن أن يصل إلى ٥
                أعضاء كحد أقصى
              </p>
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="bg-secondary p-4 rounded-lg shadow-sm space-y-2"
                >
                  <h3 className="text-lg font-semibold text-primary">
                    عضو الفريق {index + 1}
                  </h3>
                  <label className="block text-primary">الاسم الكامل</label>
                  <input
                    {...register(`team.${index}.fullName`)}
                    placeholder="اسم العضو الكامل"
                    className="w-full p-2 border rounded"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.team?.[index]?.fullName?.message}
                  </p>

                  <label className="block text-primary">
                    البريد الإلكتروني
                  </label>
                  <input
                    {...register(`team.${index}.email`)}
                    placeholder="بريد العضو الإلكتروني"
                    className="w-full p-2 border rounded"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.team?.[index]?.email?.message}
                  </p>

                  <label className="block text-primary">رقم الهاتف</label>
                  <input
                    {...register(`team.${index}.phone`)}
                    placeholder="رقم هاتف العضو"
                    className="w-full p-2 border rounded"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength={10}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                    }}
                  />

                  <p className="text-red-500 text-sm">
                    {errors.team?.[index]?.phone?.message}
                  </p>

                  <label className="block text-primary">الدور</label>
                  <select
                    {...register(`team.${index}.role`)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="تقني">تقني</option>
                    <option value="شرعي">شرعي</option>
                    <option value="مصمم">مصمم</option>
                    <option value="مشرف فريق">مشرف فريق</option>
                  </select>

                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-primary p-2 rounded mt-2 underline"
                  >
                    إزالة العضو
                  </button>
                </div>
              ))}
              {errors.team?.message && (
                <p className="text-red-500 text-sm">{errors.team.message}</p>
              )}
              {fields.length < 4 && (
                <button
                  type="button"
                  onClick={() =>
                    append({ fullName: "", email: "", phone: "", role: "تقني" })
                  }
                  className="bg-primary text-white p-2 rounded"
                >
                  إضافة عضو جديد
                </button>
              )}
            </div>
          )}

          <div className="flex items-center gap-2">
            <label className="text-primary">هل لديك فكرة؟</label>
            <input
              type="checkbox"
              {...register("hasIdea")}
              className="w-5 h-5"
            />
          </div>

          {hasIdea && (
            <div className="space-y-1">
              <textarea
                {...register("ideaDescription")}
                className="w-full p-3 rounded-md border border-tertiary focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="اكتب وصف فكرتك هنا..."
              />
              {errors.ideaDescription && (
                <p className="text-red-500 text-sm">
                  {errors.ideaDescription.message}
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-primary hover:bg-customBlue text-white rounded-lg text-lg font-semibold transition duration-300"
          >
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
}
