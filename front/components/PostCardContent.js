import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => {

  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s#]+)/g)) {
          return <Link key={i} href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
        }
        return v
      })}
    </div>
  );
};

PostCardContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default PostCardContent;
