'use client';
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import DOMPurify from "dompurify";
import { registerUser } from "@/app/utils/api";

const schema = z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    hasTeam: z.boolean(),
    team: z.array(
        z.object({
            fullName: z.string().min(2, "Team member's full name must be at least 2 characters"),
            email: z.string().email("Invalid team member's email format"),
            phone: z.string().min(10, "Team member's phone must be at least 10 characters"),
            role: z.enum(['تقني','شرعي','مصمم','مشرف فريق']),
        })
    ).optional(),
    hasIdea: z.boolean(),
    ideaDescription: z.string().min(5, "Idea description must be at least 5 characters").optional(),
});

export default function RegisterForm() {
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: { hasTeam: false, hasIdea: false, team: [] }
    });

    const { fields, append, remove } = useFieldArray({
        name: 'team',
        control
    });

    const hasTeam = watch('hasTeam');
    const hasIdea = watch('hasIdea');

    const onSubmit = async (data: z.infer<typeof schema>) => {
        data.fullName = DOMPurify.sanitize(data.fullName);
        const result = await registerUser(data);
        alert(result.message);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("fullName")} placeholder="Full Name" />
            <p>{errors.fullName?.message}</p>

            <input {...register("email")} placeholder="Email" />
            <p>{errors.email?.message}</p>

            <input {...register("phone")} placeholder="Phone" />
            <p>{errors.phone?.message}</p>

            <label>Has Team?</label>
            <input type="checkbox" {...register("hasTeam")} />

            {hasTeam && (
                <div>
                    {fields.map((field, index) => (
                        <div key={field.id}>
                            <input {...register(`team.${index}.fullName`)} placeholder="Team Member Full Name" />
                            <p>{errors.team?.[index]?.fullName?.message}</p>

                            <input {...register(`team.${index}.email`)} placeholder="Team Member Email" />
                            <p>{errors.team?.[index]?.email?.message}</p>

                            <input {...register(`team.${index}.phone`)} placeholder="Team Member Phone" />
                            <p>{errors.team?.[index]?.phone?.message}</p>

                            <select {...register(`team.${index}.role`)}>
                                <option value="تقني">تقني</option>
                                <option value="شرعي">شرعي</option>
                                <option value="مصمم">مصمم</option>
                                <option value="مشرف فريق">مشرف فريق</option>
                            </select>

                            <button type="button" onClick={() => remove(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => append({ fullName: '', email: '', phone: '', role: 'تقني' })}>Add Team Member</button>
                </div>
            )}

            <label>Has Idea?</label>
            <input type="checkbox" {...register("hasIdea")} />

            {hasIdea && (
                <textarea {...register("ideaDescription")} placeholder="Idea Description" />
            )}
            <p>{errors.ideaDescription?.message}</p>

            <button type="submit">Register</button>
        </form>
    );
}