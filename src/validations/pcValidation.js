import { required, helpers } from "@vuelidate/validators"

const laptopName = helpers.regex(/^[ A-Za-z0-9_!@#$%^&*()_+=]*$/)
const cores = helpers.regex(/^[0-9]*$/)

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
  laptop_cpu: {
    required: helpers.withMessage("გთხოვთ აირჩიოთ პროცესორი", required),
  },
  laptop_cpu_cores: {
    required: helpers.withMessage("გთხოვთ აირჩიოთ ბირთვები", required),
    cores: helpers.withMessage("მხოლოდ ციფრები", cores),
  },
  laptop_cpu_threads: {
    required: helpers.withMessage("გთხოვთ აირჩიოთ ნაკადი", required),
  },
  laptop_ram: {
    required: helpers.withMessage("გთხოვთ აირჩიოთ მეხსიერება", required),
  },
  laptop_hard_drive_type: {
    required: helpers.withMessage("გთხოვთ აირჩიოთ დისკის ტიპი", required),
  },
  laptop_purchase_date: {},
  laptop_price: {
    required: helpers.withMessage("გთხოვთ შეავსოთ ფასი", required),
    cores: helpers.withMessage("მხოლოდ ციფრები", cores),
  },
}
