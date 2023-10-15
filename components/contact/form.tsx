"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().email("Must be a valid email"),
  typeService: z.enum(["commercial", "rental", "real-estate", "janitorial"], {
    required_error: "You need to select a service type.",
  }),
  city: z.enum(["lewiston", "auburn", "portland"], {
    required_error: "Please select a city.",
  }),
  how_often: z.enum(["daily", "weekly", "biweekly"], {
    required_error: "Please select a value.",
  }),
  carpets_floors: z.enum(["floors", "carpets", "waxing"], {
    required_error: "Please select a value.",
  }),
});

export function GetAQuoteForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[350px] sm:max-w-none "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="max-w-[350px] sm:max-w-none">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="max-w-[350px] sm:max-w-none">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="max-w-[350px] sm:max-w-none">
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="(000)-000-0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="max-w-[350px] sm:max-w-none">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="John.Doe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="typeService"
          render={({ field }) => (
            <FormItem className="space-y-3 ">
              <FormLabel> Type of Request</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className=" grid grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-start sm:gap-5"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="commercial" />
                    </FormControl>
                    <FormLabel className="font-normal">Commercial</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="rental" />
                    </FormControl>
                    <FormLabel className="font-normal">Rental</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="real-estate" />
                    </FormControl>
                    <FormLabel className="font-normal">Real Estate</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="janitorial" />
                    </FormControl>
                    <FormLabel className="font-normal">Janitorial</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="max-w-[350px] sm:max-w-none">
              <FormLabel>City</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Town in which you are looking to have service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="lewiston">Lewiston</SelectItem>
                  <SelectItem value="auburn">Auburn</SelectItem>
                  <SelectItem value="portland">Portland</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="how_often"
          render={({ field }) => (
            <FormItem className="space-y-3 ">
              <FormLabel> How often</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center gap-2 justify-start sm:gap-5"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="daily" />
                    </FormControl>
                    <FormLabel className="font-normal">Daily</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="weekly" />
                    </FormControl>
                    <FormLabel className="font-normal">Weekly</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="biweekly" />
                    </FormControl>
                    <FormLabel className="font-normal">Bi-Weekly</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="carpets_floors"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Floors & Carpets</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center gap-2 justify-start sm:gap-5"
                >
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="floors" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Hardwood Floors
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="carpets" />
                    </FormControl>
                    <FormLabel className="font-normal">Carpets</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="waxing" />
                    </FormControl>
                    <FormLabel className="font-normal">Waxing</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="mb-2">
          Get a Quote
        </Button>
      </form>
    </Form>
  );
}
