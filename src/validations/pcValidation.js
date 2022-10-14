import { required, helpers } from "@vuelidate/validators"

const laptopName = helpers.regex(/^[ A-Za-z0-9_!@#$%^&*()_+=]*$/)

export const pcValidation = {
  laptop_name: {
    required: helpers.withMessage("სახელი სავალდებულოა", required),
  },
  laptopName: helpers.withMessage(
    "მხოლოდ ლათინური ასოები, ციფრები და !@#$%^&*()_+=",
    laptopName,
  ),
  brand: {
    required: helpers.withMessage("გთხოვთ აირჩიოთ ბრენდი", required),
  },
}
