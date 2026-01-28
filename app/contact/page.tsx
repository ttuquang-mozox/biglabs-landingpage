"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SendEmailSection from "@/components/send-email-section";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  agreePrivacy: z
    .boolean()
    .default(false)
    .refine((val) => val === true, {
      message: "You must agree to the privacy policy",
    }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "US",
      message: "",
      agreePrivacy: false,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    setIsSubmitting(false);
    setSubmitMessage("Thank you! Your message has been sent.");
    form.reset();
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 bg-white font-sans">
      <div className="max-w-[1700px] mx-auto rounded-t-2xl overflow-hidden relative bg-[#0f172a] h-[650px] flex items-center">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: "url('/images/default.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-6 py-8 relative z-10 h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto items-center w-full">
            <div className="col-span-5 bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10 overflow-hidden">
              <h1 className="text-3xl font-bold text-gray-900 mb-1 leading-tight">
                Get in touch
              </h1>
              <p className="text-gray-600 text-base mb-6 font-normal">
                We'd love to hear from you. Please fill out this form.
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-gray-500 text-[10px] font-semibold tracking-wider">
                            First name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="First name"
                              className="h-10 rounded-lg bg-white border-gray-100 focus-visible:ring-cyan-400 font-medium text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel className="text-gray-500 text-[10px] font-semibold tracking-wider">
                            Last name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Last name"
                              className="h-10 rounded-lg bg-white border-gray-100 focus-visible:ring-cyan-400 font-medium text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-gray-500 text-[10px] font-semibold tracking-wider">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="you@company.com"
                            className="h-10 rounded-lg bg-white border-gray-100 focus-visible:ring-cyan-400 font-medium text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-1">
                    <FormLabel className="text-gray-500 text-[10px] font-semibold tracking-wider">
                      Phone number
                    </FormLabel>
                    <div className="flex items-center bg-white rounded-lg border border-gray-100 focus-within:ring-2 focus-within:ring-cyan-400 transition-all overflow-hidden group h-10">
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-[70px] border-none shadow-none focus:ring-0 focus:ring-offset-0 text-gray-900 font-bold text-sm bg-transparent h-10 px-3">
                                  <SelectValue placeholder="US" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="US">US</SelectItem>
                                <SelectItem value="VN">VN</SelectItem>
                                <SelectItem value="HK">HK</SelectItem>
                                <SelectItem value="JP">JP</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="flex-1 space-y-0">
                            <FormControl>
                              <Input
                                placeholder="+1 (555) 000-0000"
                                className="border-none shadow-none focus-visible:ring-0 bg-transparent h-10 px-1 font-medium text-gray-500 text-sm"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-gray-500 text-[10px] font-semibold tracking-wider">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Leave us a message..."
                            className="rounded-lg bg-white border-gray-100 focus-visible:ring-cyan-400 font-medium text-sm min-h-[80px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreePrivacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2 space-y-0 py-1">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="rounded-xl border-white/80"
                          />
                        </FormControl>
                        <div className="leading-none">
                          <FormLabel className="text-black text-xs font-normal cursor-pointer">
                            You agree to our friendly privacy policy.
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 bg-linear-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-600 shadow-[0_4px_12px_-2px_rgba(6,182,212,0.4)] text-base"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitMessage && (
                    <p className="text-cyan-600 text-center font-bold mt-2 animate-fade-in text-sm">
                      {submitMessage}
                    </p>
                  )}
                </form>
              </Form>
            </div>

            <div className="col-span-7 flex flex-col space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  We'd love to hear from you
                </h2>
                <p className="text-white/70 text-base max-w-md">
                  Need something cleared up? Here are our most frequently asked
                  questions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all group-hover:scale-110">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5">
                      Email
                    </h3>
                    <p className="text-white/60 text-sm mb-0.5 font-normal">
                      Our friendly team is here to help.
                    </p>
                    <a
                      href="mailto:hi@biglabs.com"
                      className="text-white font-semibold hover:text-cyan-400 transition-colors text-base"
                    >
                      hi@biglabs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all group-hover:scale-110">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5">
                      Phone
                    </h3>
                    <p className="text-white/60 text-sm mb-0.5 font-normal">
                      Mon-Fri from 8am to 5pm.
                    </p>
                    <a
                      href="tel:+15550000000"
                      className="text-white font-semibold hover:text-cyan-400 transition-colors text-base"
                    >
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all group-hover:scale-110">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-0.5">
                      Office
                    </h3>
                    <p className="text-white/60 text-sm mb-0.5 font-normal">
                      Come say hello at our office HQ.
                    </p>
                    <p className="text-white font-semibold text-base max-w-xs leading-relaxed">
                      L8, 111 Nguyen Dinh Chieu Str., HoChiMinh City, Vietnam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SendEmailSection />
    </div>
  );
}
