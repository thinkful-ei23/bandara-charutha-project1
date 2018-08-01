const bookmarker = (function() {

    function closeAddBookmarkButton() {
        $('.js-add-new-container').on('click', '.js-cancel-button', function() {
            $('.js-input-hidden').prop('hidden', true);
            $('.js-new-bookmark-form').remove();
        });
    }

    function addBookmarkButton() {
        $('.js-add-button').on('click', function() {
            $('.js-input-hidden').prop('hidden', false);
            $('.js-add-new-container').html(
                `<form class="js-new-bookmark-form new-bookmark-form">
                <div class='form-container'>
                    <p><label for ='js-new-bookmark-form new-bookmark-form'>
                    <div class="form-grid-container">
                        <label for=js-new-bookmark-title" class="form-grid">Enter a title</label>
                        <input type="text name = "new-bookmark-title" class="js-new-bookmark-title form-grid" placeholder ="Cats" required>
                        <label for="js-new-bookmark-url" class="form-grid">Enter URL</label>
                        <input type="text" name="new-bookmark-url" class="js-new-bookmark-url form-grid" placeholder="cats.com" required>
                        <label for="js-new-bookmark-info" class="form-grid">Enter info</label>
                        <textarea rows="5" type="text" name="js-new-bookmark-info" class="js-new-bookmark-info form-grid" placeholder="Cats" required></textarea>
                        <label for="js-new-bookmark-rating" class="form-grid">Enter a Rating</label>
                        <input type="number" name="js-new-bookmark-rating" class="js-new-bookmark-rating form-grid" placeholder="Rate 1 to 5" required>
                    </div>
                    <button type="submit">Add New Bookmark</button>
                    <button class="js-cancel-button" type="button">CANCEL</button>
                </div>
            </form>`
            );
        });
    }
    
    function createError(err) {
        let errMsg = '';
        if (err.responseJSON && err.responseJSON.errMsg) {
            errMsg = err.responseJSON.errMsg;
        } else {
            errMsg = `${err.code} Server Error`;
        }
        $('.error-container').prop('hidden', false);
        return `<section class='error-content'>
                    <p>${errMsg}</p>
                    <button id='cancel-error">Cancel</button>
                </section>`;
    }

    const createteBookmarkString = function(item) {
        let color = '#00bf03';

        if (item.starRating < store.minimumRating) {
            return '';
        } else {
            let expandedSection = '';
            if (item.expanded === true) expandedSection =`<textarea class="js-bookmark-info">${item.desc}</textarea><button class="js-change-info">Submit Change</button><a href="${item.url}">Visit ${item.title}'s Site</a><button class="js-delete-bookmark">Delete</button>`;
            let starString = '';
            for (let i = 1; i <= 5; i++) {
              let checkedClass = '';
              if (i <= item.rating) checkedClass = 'checked';
              starString+= `<span class="fa fa-star ${checkedClass}  js-star" name="js-star${i}"></span>`;
            }
            return `<li data-item-id="${item.id}" style="background-color:${color}"><h2>${item.title}</h2><div class="js-star-rating star-rating">${starString}</div>${expandedSection}<svg width="4%" aria-hidden="true" data-prefix="fas" data-icon="expand" class="svg-inline--fa fa-expand fa-w-14 js-li-expand" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="color" d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"></path></svg></li>`;      
        }
    };
    
    const createBookmarkListString = function(bookmarks) {
        const stringOfBookmarks = bookmarks.map(eachObject => createBookmarkString(eachObject));
        return stringOfBookmarks.join('');
    };
    
    const updateStore = function() {
        api.getBookmarks(function(response) {
        });
    };

    const render = function() {
        if(store.error) {
            const renderError = createError(store.error);
            $('.error-container').html(renderError);
        } else {
            $('.error-container').empty();
        }
        
        updateStore();
        
        let bookmarks = store.bookmarks;
        const bookmarksString = createBookmarkListString(bookmarks);
        $('.js-bookmark-list').html(bookmarksString);
        hiddenElementAttrChange();
    };

    const onErrorHandling = (err) => {
        console.log(err);
        store.setError(err);
        render();
    };

    function getNewBookmarkInfo() {
        $('.js-add-new-container').on('submit', function(event) {
            event.preventDefault();
            const newTitle = $('.js-new-bookmark-title').val();
            const newURL = $('.js-new-bookmark-url').val()
            const newInfo = $('.js-new-bookmark-info').val();
            const newStarRating = $('.js-new-bookmark-rating').val();
            
            $('.js-new-bookmark-form').remove(); 
            $('.js-input-hidden').prop('hidden', true);

            const newItem = item.create(newTitle, newUrl, newInfo, newStarRating);
            api.createItem(newItem, function(response) {
              newItem.id = response.id;
              store.addBookmark(newItem);
              render();
            }, onErrorHandling);
        });
    };

    const getIdFromElement = function(element) {
        return $(element)
          .closest('li')
          .data('item-id');
      };

    const deleteSingleBookmark = function() {
        $('.js-bookmark-list').on('click', '.js-delete-bookmark', function(event) {
            const id = getIdFromElement(event.currentTarget);
            api.deleteItem(id, function() {
                store.deleteBookmark(id);
                render();
            }, onErrorFunction);
        });
    };

    const expandBookmarks = function() {
        $('.js-bookmark-list').on('click', '.js-li-expand', function(event) {
          const id = getIdFromElement(event.currentTarget);
          store.toggleExpanded(id);
          render();
        });
    };

    const changeStarRating = function() {
        $('.js-bookmark-list').on('click', '.js-star', function(event) {
          let rating = $(this).attr('name');
          let starRating = rating[7];
          let id = $(this).closest('li').data('item-id');
          api.changeRating(id, starRating, function(response) {
            const bookmarkObject = store.findById(id);
            bookmarkObject.rating = starRating;
            render();
          }, onErrorFunction);
        });
    };

    const minimumRatingChange = function() {
        $('.js-min-rating').on('change', function(event) {
          const minRating = this.value;
          store.minimumRating = minRating;
          render();
        });
    };

    const handleCloseError = function() {
        $('.error-container').on('click', '#cancel-error', () => {
          store.setError(null);
          $('.error-container').prop('hidden', true);
          render();
        });
    };
    
    const hiddenElementAttrChange = function() {
        if (store.bookmarks.length === 0) {
          $('ul').prop('hidden', true);
        } else {
          $('ul').prop('hidden', false);
        }
    };

    const handleInfoChange = function() {
        $('.js-bookmark-list').on('click', '.js-change-info', function(event) {
          const newDescription = $('.js-bookmark-info').val();
          let id = $(this).closest('li').data('item-id');
          api.changeDescription(id, newDescription, function(response){
            const bookmarkObject = store.findById(id);
            bookmarkObject.desc = newDescription;
            render();
          }, onErrorFunction);
        });
    };

    const handleBookmarkListFunctions =function() {
        closeAddBookmarkButton();
        addBookmarkButton();
        getNewBookmarkInfo();
        deleteSingleBookmark();
        expandBookmarks();
        changeStarRating();
        minimumRatingChange();
        handleCloseError();
        hiddenElementAttrChange();
        handleInfoChange();
      };

    return {
        render,
        handleBookmarkListFunctions,
    };
}());