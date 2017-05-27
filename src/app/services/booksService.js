angular.module('app-bootstrap').factory('booksService',
  ['$http',
  function ($http) {

    return {

      getBooks: () => {
        return $http.get('https://api.parse.com/1/classes/Book');
      },

      getBook: (objectId) => {
        return $http.get(`https://api.parse.com/1/classes/Book/${objectId}`);
      },

      postComment: (com, obj, usr) => {
        const data = {
          user: {
            __type: 'Pointer',
            className: '_User',
            objectId: usr
          },
          book: {
            __type: 'Pointer',
            className: 'Book',
            objectId: obj
          },
          comment: com
        }
        return $http.post('https://api.parse.com/1/classes/Comment', data)
      },

      getComments: (objectId) => {
        const params = {
          where: {
            book: {
              __type: 'Pointer',
              className: 'Book',
              objectId
            }
          },
          include: 'user'
        }
        return $http.get('https://api.parse.com/1/classes/Comment', { params })
      },

      rentPost: (objBook, objUser) => {

        let today = new Date();
        let bringBack = today;
        bringBack.setDate(today.getDate() + 15);
        today = today.toISOString();
        bringBack = bringBack.toISOString();

        const rent = {
          user: {
            __type: 'Pointer',
            className: '_User',
            objectId: objUser
          },
          book: {
            __type: 'Pointer',
            className: 'Book',
            objectId: objBook
          },
          from: {
            __type: 'Date',
            iso: today
          },
          to: {
            __type: 'Date',
            iso: bringBack
          }
        }
        return $http.post('https://api.parse.com/1/classes/Rent', rent)
      },

      wishPost: (objBook, objUser) => {
        const wish = {
          user: {
            __type: 'Pointer',
            className: '_User',
            objectId: objUser
          },
          book: {
            __type: 'Pointer',
            className: 'Book',
            objectId: objBook
          }
        }
        return $http.post('https://api.parse.com/1/classes/Wishlist', { data: wish })
      },

      getRents: (bookID) => {
        const where = {
          book: {
            __type: 'Pointer',
            className: 'Book',
            objectId: bookID
          }
        }
        return $http.get('https://api.parse.com/1/classes/Rent', { params: { where } })
        .then((response) => {
          let bookRent = false;
          let user = null;
          let rentPeriod = new Date();
          rentPeriod.setDate(rentPeriod.getDate() - 15);
          rentPeriod = rentPeriod.toISOString();
          let dateDev;
          for (let i = 0; i < response.data.results.length; i++) {
            if (response.data.results[i].createdAt >= rentPeriod) {
              bookRent = true;
              user = response.data.results[i].user.objectId;
              dateDev = response.data.results[i].to.iso;
              return { bookRent, user, dateDev }
            }
          }
          return { bookRent, user, dateDev }
        })
      },

      getWish: (bookOBJ, userOBJ) => {
        const where = {
          data: {
            book: {
              __type: 'Pointer',
              className: 'Book',
              objectId: bookOBJ
            },
            user: {
              __type: 'Pointer',
              className: '_User',
              objectId: userOBJ
            }
          }
        }
        return $http.get('https://api.parse.com/1/classes/Wishlist', { params: { where } })
      },

      postSuggest: (book) => {
        return $http.post('https://api.parse.com/1/classes/BookSuggestion', book)
      }

    };
  }
]);
