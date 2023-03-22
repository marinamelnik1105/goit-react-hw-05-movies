import { Formik } from 'formik';
import { BtnLabel, FormBtn } from './SearchMovies.styled';
import { Form, Field } from './SearchMovies.styled';
import { BiSearch } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';

export const SearchMovies = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('value');
  let initialValues = { value: '' };

  const handleSubmit = ({ value }, action) => {
    if (value === '' || null) return;
    if (name === '' || null) return;

    const nextParams = name === '' ? {} : { value };
    setSearchParams(nextParams);
    action.resetForm();
    return onSubmit({ value });
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
