import { Formik } from 'formik';
import { BtnLabel, FormBtn } from './SaerchMovies.styled';
import { Form, Field } from './SaerchMovies.styled';
import { BiSearch } from 'react-icons/bi';

let initialValues = { value: '' };

export const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = values => {
    initialValues = values;
    return onSubmit(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <FormBtn type="submit">
          <BtnLabel>
            <BiSearch size="35" />
          </BtnLabel>
        </FormBtn>
        <Field
          name="value"
          type="text"
          placeholder="Search images and photos"
        />
      </Form>
    </Formik>
  );
};
