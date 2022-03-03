/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTalk = /* GraphQL */ `
  subscription OnCreateTalk {
    onCreateTalk {
      id
      clintId
      name
      description
      speakerName
      speakerBio
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTalk = /* GraphQL */ `
  subscription OnUpdateTalk {
    onUpdateTalk {
      id
      clintId
      name
      description
      speakerName
      speakerBio
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTalk = /* GraphQL */ `
  subscription OnDeleteTalk {
    onDeleteTalk {
      id
      clintId
      name
      description
      speakerName
      speakerBio
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      message
      createdBy
      Talk {
        id
        clintId
        name
        description
        speakerName
        speakerBio
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      talkCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      message
      createdBy
      Talk {
        id
        clintId
        name
        description
        speakerName
        speakerBio
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      talkCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      message
      createdBy
      Talk {
        id
        clintId
        name
        description
        speakerName
        speakerBio
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      talkCommentsId
    }
  }
`;
