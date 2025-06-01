"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useMutation } from "@tanstack/react-query";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import TextField from "@/components/controlled-input/text-field";
import { Mail, User } from "lucide-react";
import { contactUsFormSchema } from "@/schemas/contac-us/contact-us.schema";
import { contactUsAction } from "@/server/actions/contact-us.actions";
import TextArea from "@/components/controlled-input/text-area";

export function ContactUsForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  /**
   * @hookform
   */
  const form = useForm<z.infer<ReturnType<typeof contactUsFormSchema>>>({
    resolver: zodResolver(contactUsFormSchema()),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      phoneNumber: "",
    },
  });

  /**
   * @mutation
   */
  const { mutate, isPending } = useMutation({
    mutationFn: contactUsAction,
    onSuccess: () => {
      form.reset();
    },
  });

  /**
   * @handlers
   */
  const formSubmitHandler = async (
    values: z.infer<ReturnType<typeof contactUsFormSchema>>
  ) => {
    mutate(values);
  };
  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6 max-w-sm", className)}
        onSubmit={form.handleSubmit(formSubmitHandler)}
        {...props}
      >
        <div className="grid gap-6">
          <div className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <TextField
                control={form.control}
                name="firstName"
                placeholder="Emri"
                startAdornment={<User width={16} height={16} color="#D9D9D9" />}
              />
              <TextField
                control={form.control}
                name="lastName"
                placeholder="Mbiemri"
                startAdornment={<User width={16} height={16} color="#D9D9D9" />}
              />
            </div>
            <TextField
              control={form.control}
              name="email"
              placeholder="Email Adresa"
              startAdornment={<Mail width={16} height={16} color="#D9D9D9" />}
            />
            <TextField
              control={form.control}
              name="subject"
              placeholder="Subjekti"
              startAdornment={<User width={16} height={16} color="#D9D9D9" />}
            />
            <TextArea
              control={form.control}
              name="message"
              placeholder="Mesazhi"
            />
          </div>

          <Button type="submit" className="w-full mt-3" loading={isPending}>
            Dergo
          </Button>
        </div>
      </form>
    </Form>
  );
}
