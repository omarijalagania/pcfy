import { required, helpers, minLength } from "@vuelidate/validators"

const geo = helpers.regex(/[Ⴀ-\u10fe]$/)
const regEmail = helpers.regex(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
)
const phone = helpers.regex(/^(\+995)(79\d{7}|5\d{8})$/)

export const clientValidation = {
  name: {
    required: helpers.withMessage("სახელი სავალდებულოა", required),
    minLength: helpers.withMessage("მინიმუმ 2 სიმბოლო", minLength(2)),
    geo: helpers.withMessage("მხოლოდ ქართული ასოები", geo),
  },
  surname: {
    required: helpers.withMessage("სახელი სავალდებულოა", required),
    minLength: helpers.withMessage("მინიმუმ 2 სიმბოლო", minLength(2)),
  },
  email: {
    required: helpers.withMessage("ემაილი სავალდებულოა", required),
    email: helpers.withMessage("ემაილი უნდა შეიცავდეს @redberry.ge", regEmail),
  },
  phone_number: {
    required: helpers.withMessage("ტელეფონი სავალდებულოა", required),
    phone: helpers.withMessage(
      "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
      phone,
    ),
  },
  team: {},

  position: {},
}
