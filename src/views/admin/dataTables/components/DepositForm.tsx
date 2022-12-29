// Chakra imports
import {
  SimpleGrid,
  Text,
  useColorModeValue,
  Box,
  Radio,
  ButtonGroup,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import Information from "views/admin/profile/components/Information";
import { Formik } from "formik";
import { useRouter } from "next/router";
import * as React from "react";
import * as Yup from "yup";
import {
  CheckboxContainer,
  CheckboxControl,
  InputControl,
  NumberInputControl,
  PercentComplete,
  RadioGroupControl,
  ResetButton,
  SelectControl,
  SliderControl,
  SubmitButton,
  TextareaControl,
} from "formik-chakra-ui";

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  const onSubmit = (data: any) => {
    console.log(data);
  };

  function formatDate(date: string | number | Date) {
    return new Date(date).toLocaleDateString();
  }

  const initialValues = {
    bank: "",
    lastName: "",
    // dep_proof: "",
    depAmount: 0,
  };

  const validationSchema = Yup.object({
    bank: Yup.string().required(),
    lastName: Yup.string().required(),
    depAmount: Yup.number().required().min(10),
  });

  // async function onSubmit(values: any) {
  //   const options = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(values),
  //   };

  //   await fetch("http://localhost:3000/api/auth/deposit", options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) router.push("http://localhost:3000");
  //     });
  // }

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        Withdraw/Deposit Submit Form
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px"></Text>
      <SimpleGrid columns={2} gap="20px">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, values, errors }) => (
            <Box
              borderWidth="1px"
              rounded="lg"
              shadow="1px 1px 3px rgba(0,0,0,0.3)"
              maxWidth={800}
              p={6}
              m="10px auto"
              as="form"
              onSubmit={handleSubmit as any}
            >
              <InputControl name="bank" label="Bank Name" />
              <InputControl name="lastName" label="Last Name" />
              <NumberInputControl
                name="depAmount"
                label="Deposit Amount (USD)"
              />
              <ButtonGroup padding={5}>
                <SubmitButton>Submit</SubmitButton>
                <ResetButton>Reset</ResetButton>
              </ButtonGroup>
              {/* <Box as="pre" marginY={10}>
                {JSON.stringify(values, null, 2)}
                <br />
                {JSON.stringify(errors, null, 2)}
              </Box> */}
            </Box>
          )}
        </Formik>
      </SimpleGrid>
    </Card>
  );
}
