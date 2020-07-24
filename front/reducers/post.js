
export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: "kendy93",
      nickname: '제로초',
    },
    content: '첫번째 게시글 #헤시태그 #익스프레스',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }],
    Comments: [{
      User: {
        nickname: 'hi',
      },
      content: '우와',
    }, {
      User: {
        nickname: 'hhh',
      },
      content: '하이',
    }],
  }],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  User: {
    id: 2,
    nickname: '제로초2',
  },
  content: '두번째 게시글 #헤시태그 #익스프레스',
  Images: [{
    src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
  }, {
    src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
  }, {
    src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
  }],
  Comments: [{
    User: {
      nickname: 'hi2',
    },
    content: '우와2',
  }, {
    User: {
      nickname: 'hhh2',
    },
    content: '하이2',
  }],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer;