import React from 'react';
import { gql, useQuery } from '@apollo/client';
import settings from '../appSettings.json';

const GET_PRODUCT_IMAGE = gql`
query MyQuery {
  product {
    productImage {
      files {
        fileName
        path
        url
        mediaText
      }
    }
  }
}
`;

const ProductImage = () => {
  // Fetch data with useQuery
  const { loading, error, data } = useQuery(GET_PRODUCT_IMAGE);
  // Get settings from appSetting.json
  const {baseUrl, sasToken}=settings.blob;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Access the first product's image files array
  const products = data?.product;
  const productFiles = products?.[0]?.productImage?.files || [];

  return (
    <div>
      {productFiles.length > 0 ? (
        productFiles.map((file, index) => (
          <div key={index}>
            {
              <img src={`${baseUrl}${file.url}${'?'}${sasToken}`} alt={file.mediaText || file.fileName || "Product Image"} />
            }
          </div>
        ))
      ) : (
        <p>No image found</p>
      )}
    </div>
  );
}

export default ProductImage;
