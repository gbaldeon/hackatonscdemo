import { Text, Field, ImageField, LinkField, Link, Image } from '@sitecore-jss/sitecore-jss-nextjs';

type SugDemoProps = {
  fields: {
    Heading: Field<string>;
    Image: ImageField;
    Link: LinkField;
  };
};

const SugDemo = (props: SugDemoProps): JSX.Element => (
  <div>
    <p>SugDemoComponent ok</p>
    <Link field={props?.fields?.Link}>
      <Text field={props?.fields?.Heading} />
      <Image field={props?.fields?.Image} />
    </Link>
    <p>ok</p>
  </div>
);

export default SugDemo;
