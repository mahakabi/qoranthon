'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import DOMPurify from "dompurify";
import { registerUser } from "@/app/utils/api";

const schema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: z.infer<typeof schema>) => {
        data.username = DOMPurify.sanitize(data.username);
        const result = await registerUser(data);
        alert(result.message);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} placeholder="Username" />
            <p>{errors.username?.message}</p>

            <input {...register("email")} placeholder="Email" />
            <p>{errors.email?.message}</p>

            <input type="password" {...register("password")} placeholder="Password" />
            <p>{errors.password?.message}</p>

            <button type="submit">Register</button>
        </form>
    );
}
