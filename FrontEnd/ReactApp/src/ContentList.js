import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_DEV_PAGE = gql`
query MyQuery {
  page {
    author
    htmlBody {
      html
    }
    published
    modifiedUtc
    displayText
  }
}
`;

const ContentList = () => {
  const { loading, error, data } = useQuery(GET_DEV_PAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {
        data.page.map((item, index) => (
          <div key={index}>
            <h1>{item.displayText}</h1>
            <div dangerouslySetInnerHTML={{ __html: item.htmlBody.html }} />
            <p>Auther: {item.author}</p>
            <p>Published: {item.published ? "Yes" : "No"}</p>
            <p>Last Modified: {new Date(item.modifiedUtc).toLocaleString()}</p>
          </div>
        ))
      }

    </div>
  );
};

export default ContentList;
