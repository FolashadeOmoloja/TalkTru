'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form , FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, } from "../elements/form"
import { UserValidation } from "@/lib/validations/user";
import { Button } from "../elements/button"
import { Input } from "../elements/input";

// import { Input } from "@/components/ui/input"

interface Iprops {
user: {
    id: string,
    objectId: string,
    username: string,
    name:string,
    bio: string,
    image:string
};
btnTitle: string
}



const AccountProfile = ({user, btnTitle}: Iprops) => {
    const form = useForm(
      {
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo:'',
            name: '',
            username: '',
            bio: ''
        }
      }
    )

  return (
      <Form>

      </Form>
  )
}

export default AccountProfile