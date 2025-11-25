import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CartItemType } from "@/types/types";

const schema = z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    addressLine1: z.string().min(5, "Address line 1 must be at least 5 characters"),
    addressLine2: z.string().optional(),
    postalCode: z.string().min(5, "Postal code must be at least 5 characters"),
    city: z.string().min(3, "City must be at least 3 characters"),
    country: z.string().min(2, "Country must be at least 2 characters"),
});

export type FormType = z.infer<typeof schema>;

export function useCheckout() {
    const {
        register,
        handleSubmit,
        formState
    } = useForm<FormType>({
        resolver: zodResolver(schema),
        mode: "all",
    });

    const { cart, totalQuantity, total, clearCart } = useContext(CartContext)!;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activebtn, setActivebtn] = useState("");

    const submit: SubmitHandler<FormType> = async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log(data);
            setIsSubmitted(true);
            clearCart();
            throw new Error();
        } catch (error) {
            console.log("Submission failed");
        }
    };

    return {
        register,
        handleSubmit,
        errors: formState.errors,
        isSubmitting: formState.isSubmitting,
        cart,
        totalQuantity,
        total,
        clearCart,
        isSubmitted,
        setIsSubmitted,
        activebtn,
        setActivebtn,
        submit
    };
}
