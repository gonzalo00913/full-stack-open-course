import React from "react";
import { Formik, useField } from "formik";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import validationSchema from "./validationLogin"

const initialValues = {
  email: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const showError = meta.touched && meta.error;

  return (
    <>
    <TextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      error={showError}
      {...props}
    />
     {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (
    <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps) => {
        const {handleSubmit} = formikProps;
        return (
          <View>
            <FormikInputValue name="email" placeholder="email" />
            <FormikInputValue name="password" placeholder="password" secureTextEntry/>
            <Button title="Login" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default SignIn;
