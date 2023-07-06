import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';

import { clearArticleError } from '../../store';

import {
  FormArticle,
  TitleArticle,
  Label,
  Input,
  InputSubmit,
  TextArea,
  List,
  Item,
  ButtonDelete,
  ButtonAdd,
  Section,
} from './ArticleFormStyles';

const ArticleForm = ({ componentTitle, errorMessage, onSubmit, title, description, body, tags = [] }) => {
  const newTagField = useRef(null);

  useEffect(() => {
    dispatch(clearArticleError());
  }, []);

  const dispatch = useDispatch();

  const error = useSelector((state) => state.openedArticle.error);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: { title, description, body, tagList: [...tags] },
  });

  const { append, remove, fields } = useFieldArray({
    control,
    name: 'tagList',
  });

  return (
    <FormArticle onSubmit={handleSubmit(onSubmit)}>
      <TitleArticle>{componentTitle}</TitleArticle>

      <Label>Title</Label>
      <Input
        placeholder={errors?.title ? 'Requied' : 'Important Article Title'}
        {...register('title', {
          required: true,
        })}
        requiredField={errors?.title}
      ></Input>

      <Label>Short description</Label>
      <Input
        placeholder={errors?.description ? 'Requied' : 'Some short description that displays in atricles list'}
        {...register('description', {
          required: true,
        })}
        requiredField={errors?.description}
      ></Input>

      <Label>Text</Label>
      <TextArea
        rows={6}
        placeholder={errors?.body ? 'Requied' : 'Text (Use markdown)'}
        {...register('body', {
          required: true,
        })}
        requiredField={errors?.body}
      ></TextArea>

      <Label>Tags</Label>
      <List>
        {fields.map((tag, index) => {
          return (
            <Item key={tag.id}>
              <Input
                placeholder={errors?.tagList ? 'Requied' : 'Tag'}
                {...register(`tagList[${index}]`, {
                  required: true,
                })}
                requiredField={errors?.tagList && index === fields.length - 1}
              />
              <ButtonDelete type="button" onClick={() => remove(index)}>
                Delete
              </ButtonDelete>
              {index < fields.length - 1 ? null : (
                <ButtonAdd type="button" onClick={() => append('')}>
                  Add tag
                </ButtonAdd>
              )}
            </Item>
          );
        })}
        {fields.length === 0 && (
          <Item>
            <Input placeholder="Tag" ref={newTagField} />
            <ButtonAdd
              type="button"
              onClick={() => {
                if (newTagField.current.value) append(newTagField.current.value);
                else newTagField.current.focus();
              }}
            >
              Add tag
            </ButtonAdd>
          </Item>
        )}
      </List>

      <InputSubmit disabled={!isValid}></InputSubmit>
      {error && <Section>{errorMessage}</Section>}
    </FormArticle>
  );
};

export default ArticleForm;
