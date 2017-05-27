angular.module('app-bootstrap').controller('BookController',
  ['$stateParams', 'booksService', 'sessionService', 'growl',
    function ($stateParams, booksService, sessionService, growl) {

      booksService.getBook($stateParams.objectId).then((response) => {
        this.book = response.data;
        booksService.getRents(this.book.objectId).then((bookInfo) => {
          if (!bookInfo.bookRent) {
            this.availableForRent = true;
            this.rentByMe = true;
          } else if (bookInfo.user === sessionService.getActualUser().objectId) {
            this.availableForRent = false;
            this.rentByMe = true;
            this.dateDev = bookInfo.dateDev;
          } else {
            booksService.getWish(this.book.objectId, sessionService.getActualUser().objectId)
            .then((answer) => {
              if (answer.data.results.length === 0) {
                this.availableForRent = true;
              } else {
                this.availableForRent = false;
              }
              this.rentByMe = false;
            })
          }
        })
        booksService.getComments(this.book.objectId).then((commentsResponse) => {
          this.comments = commentsResponse.data.results;
        })
      })

      this.makeRequest = () => {
        if (this.availableForRent && this.rentByMe) {
          this.rentABook().then(() => {
            this.availableForRent = false;
            this.rentByMe = true;
            this.dateDev = new Date();
            this.dateDev.setDate(this.dateDev.getDate() + 15);
            this.dateDev = this.dateDev.toISOString();
            this.clickSuccessR();
          })
          .catch(() => {
            growl.error('CTRL.ERROR');
          });
        } else if (!this.availableForRent && !this.rentByMe) {
          this.addToWishlist().then(() => {
            this.availableForRent = true;
            this.clickSuccessW();
          })
          .catch(() => {
            growl.error('CTRL.ERROR');
          });
        }
      }

      this.imageUrl = 'http://placehold.it/100x100';

      this.registerComment = (isValid) => {
        if (isValid) {
          booksService.postComment(this.bookComment.speach, this.book.objectId,
                                   sessionService.getActualUser().objectId)
          .then(() => {
            const com = {
              user: {
                username: sessionService.getActualUser().username
              },
              createdAt: new Date(),
              comment: this.bookComment.speach
            }
            this.bookComment.speach = '';
            this.comments.push(com);
          })
        }
      }

      this.bookPlus = {
        tematica: 'Misterio',
        sinopsis: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.`
      }

      this.rentABook = () => {
        return booksService.rentPost(this.book.objectId, sessionService.getActualUser().objectId)
      }

      this.addToWishlist = () => {
        return booksService.wishPost(this.book.objectId, sessionService.getActualUser().objectId)
      }

      this.available = () => {
        return !this.availableForRent && this.rentByMe || this.availableForRent && !this.rentByMe;
      }

      this.clickSuccessW = () => {
        growl.success('CTRL.SUCC_W');
      }

      this.clickSuccessR = () => {
        growl.success('CTRL.SUCC_R');
      }
    }
  ]
);
