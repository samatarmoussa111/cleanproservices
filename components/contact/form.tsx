"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema } from "./form-schema";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import InputText from "./form-inputs/input-text";
import RadioInput from "./form-inputs/radio-input";
import SelectInput from "./form-inputs/select-input";

import {
  radioGroupCarpetsFloorsItems,
  radioGroupHowOftenItems,
  radioGroupServicesItems,
  selectCitiesItems,
} from "./data/select-radio-data";

export function GetAQuoteForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Do something with the form values.
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
          <InputText
            name="firstName"
            label="First Name"
            form={form}
            placeholder="John"
          />
          <InputText
            name="lastName"
            label="Last Name"
            form={form}
            placeholder="Doe"
          />
        </div>
        <InputText
          name="phone"
          label="Phone"
          form={form}
          placeholder="(000)-000-0000"
        />
        <InputText
          name="email"
          label="Email"
          form={form}
          placeholder="John.Doe@gmail.com"
        />

        <RadioInput
          name="typeService"
          radioGroupItems={radioGroupServicesItems}
          title="Type of Request"
          form={form}
        />
        <SelectInput
          name="city"
          form={form}
          title="City"
          placeholder="Town in which you are looking to have service"
          selectItems={selectCitiesItems}
        />
        <RadioInput
          name="how_often"
          radioGroupItems={radioGroupHowOftenItems}
          title="How often"
          form={form}
        />
        <RadioInput
          name="carpets_floors"
          radioGroupItems={radioGroupCarpetsFloorsItems}
          title="Floors & Carpets"
          form={form}
        />
        <Button type="submit" className="mb-2">
          Get a Quote
        </Button>
      </form>
    </Form>
  );
}
