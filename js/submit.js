// Class for student files
class Item {
    constructor(type, format, name, owner, data) {
        this.type = type; // text, audio, image, video
        this.format = format; // jpg, png, etc. 
        this.name = name; // file name
        this.owner = owner; // original creator of the file
        this.data = data; // file data
        this.li = null; // list item element
        this.nameSpan = null; 
        this.setName = function(newName) { // use this for setting name of existing function
          this.name = newName; 
          this.nameSpan.text(newName); 
        }
    }
}

// Class for sortable lists
class SortableList {
    constructor(selector, ul, owner) {
        this.selector = selector; // jquery selector
        this.ul = ul; // unordered list element
        this.owner = owner; // student name, submit owner name
        this.array = []; // all files in the list
    }
}

// general constants
const DIV_TAGS = "<div></div>";
const UL_TAGS = "<ul></ul>";
const LI_TAGS = "<li></li>";
const IMG_TAG = "<img>";
const ID = "id";
const SRC = "src";
const DISPLAY = "display";
const NONE = "none";
const BLOCK = "block";
const CLICK = "click";
const MAX_WIDTH = "maxWidth"; 
const MAX_HEIGHT = "maxHeight"; 
const PX = "px"; 
const SPAN_TAGS = "<span></span>";

// Icons
const TEXT_ICON = "images/text-icon.png";
const AUDIO_ICON = "images/audio-icon.png";
const IMAGE_ICON = "images/photo-icon.png";
const VIDEO_ICON = "images/cinema-icon.png";
const ICON_URLS = new Array();
ICON_URLS["text"] = TEXT_ICON;
ICON_URLS["audio"] = AUDIO_ICON;
ICON_URLS["image"] = IMAGE_ICON;
ICON_URLS["video"] = VIDEO_ICON;
const HANDLE_URL = "images/icons8-sort-32.png";
const ICON_CLASS = "type";
const HANDLE_CLASS = "handle";

// Students, Files
const STUDENT_DIV_CLASS = "listDiv col-12 col-sm-6 col-md-4";
const STUDENT_DIV_PREFIX = "studentDiv";
const FILELIST_CLASS = "fileList";
const TEAM_LIST_AREA_SELECTOR = "#teamListArea";
const STUDENT_NAME_HEADER_TAGS = "<h3></h3>";
const UI_STATE_DEFAULT = "ui-state-default";

// Submit Sortable
const SUBMIT_SORTABLE_ID = "submitSortable";
const SUBMIT_SORTABLE_SELECTOR = "#" + SUBMIT_SORTABLE_ID;
const SUBMIT_OWNER_NAME = "submit";

// Student Sortables
const STUDENT_CSS_PREFIX = "student";
const STUDENT_SORTABLE_PREFIX = "studentSortable";

// Add File Buttons
const TEXT_BUTTON_SELECTOR = "#textButton";
const AUDIO_BUTTON_SELECTOR = "#audioButton";
const IMAGE_BUTTON_SELECTOR = "#imageButton";
const VIDEO_BUTTON_SELECTOR = "#videoButton";

// Modal 
const MODAL_SELECTOR = "#modal";
const MODAL_CLOSE_SELECTOR = "#modalClose";

// multipurpose selector suffixes and appendixes
const DELETE_SELECTOR_SUFFIX = " > .delete";
const IMAGE_DISPLAY_SUFFIX = " > .imageDisplay";

// Text Input
const TEXT_INPUT_SUBMIT_SELECTOR = "#textSubmit";
const TEXT_INPUT_TITLE_SELECTOR = "#textTitle";
const TEXT_INPUT_EDITOR_SELECTOR = "#editor";
const TEXT_INPUT_FORM_SELECTOR = "#textInputForm";
const TEXT_INPUT_CONTENT_SELECTOR = "#textInputContent";
const QUILL_BLANK = "<p><br></p>"

// Audio Record
const AUDIO_RECORD_SUBMIT_SELECTOR = "#audioSubmit";
const AUDIO_RECORD_TITLE_SELECTOR = "#audioTitle";
const AUDIO_RECORD_BUTTON_SELECTOR = "#audioButton";
const AUDIO_RECORD_FORM_SELECTOR = "#audioRecordForm";
const AUDIO_RECORD_CONTENT_SELECTOR = "#audioRecordContent";
const AUDIO_RECORD_START_BUTTON_SELECTOR = "#audioRecordStartButton";
const AUDIO_RECORD_STOP_BUTTON_SELECTOR = "#audioRecordStopButton";
const AUDIO_RECORD_DELETE_BUTTON_SELECTOR = "#audioRecordDeleteButton";
const AUDIO_RECORD_CONTROL = "audioRecordControl";
const AUDIO_RECORD_DELETE_FILE_BUTTON_SELECTOR = "#audioRecordDeleteFileButton";
const AUDIO_RECORD_FAILED_MSG = "Failed to load mic.";

// Video Record
const VIDEO_RECORD_SUBMIT_SELECTOR = "#videoSubmit";
const VIDEO_RECORD_TITLE_SELECTOR = "#videoTitle";
const VIDEO_RECORD_BUTTON_SELECTOR = "#videoButton";
const VIDEO_RECORD_FORM_SELECTOR = "#videoRecordForm";
const VIDEO_RECORD_CONTENT_SELECTOR = "#videoRecordContent";
const VIDEO_RECORD_START_BUTTON_SELECTOR = "#videoRecordStartButton";
const VIDEO_RECORD_STOP_BUTTON_SELECTOR = "#videoRecordStopButton";
const VIDEO_RECORD_DELETE_BUTTON_SELECTOR = "#videoRecordDeleteButton";
const VIDEO_RECORD_CONTROL = "videoRecordControl";
const VIDEO_RECORD_DELETE_FILE_BUTTON_SELECTOR = "#videoRecordDeleteFileButton";
const VIDEO_RECORD_FAILED_MSG = "Failed to load cam.";
const VIDEO_RECORD_VIDEO_CLASS = "videoRecord";

// Text View
const TEXT_VIEW_CONTENT_SELECTOR = "#textViewContent";
const TEXT_VIEW_TITLE_SELECTOR = "#textViewTitle";
const TEXT_VIEW_BODY_SELECTOR = "#textViewBody";
const TEXT_VIEW_EDIT_SELECTOR = "#textViewEdit";

// Image input
const PHOTO_CONSTRAINTS = {
  audio: false,
  video: {
    facingMode: {ideal: "environment"}
  }
};
const IMAGE_INPUT_CONTENT_SELECTOR = "#imageInputContent";
const IMAGE_INPUT_VIDEO_ID = "imageInputVideo";
const IMAGE_INPUT_MESSAGE_AREA_SELECTOR = "#imageInputMessageArea";
const IMAGE_INPUT_STREAM_AREA_SELECTOR = "#imageInputStreamArea";
const CAM_LOADING_MSG = "Attempting to load camera...";
const CAM_FAILED_MSG = "Failed to load camera.";
const IMAGE_INPUT_SNAP_SELECTOR = "#imageInputSnap";
const IMAGE_INPUT_TYPE = "image/png";

// image edit
const IMAGE_EDIT_CONTENT_SELECTOR = "#imageEditContent";
const CANVAS_SELECTOR_SUFFIX = " > canvas";
//const IMAGE_EDIT_CANVAS_SELECTOR = IMAGE_EDIT_CONTENT_SELECTOR + " > canvas"; 
const IMAGE_EDIT_TITLE_SELECTOR = "#imageEditTitle";
const IMAGE_EDIT_SUBMIT_SELECTOR = "#imageEditSubmit";
const IMAGE_EDIT_FORM_SELECTOR = "#imageEditForm"; 

// image view
const IMAGE_VIEW_CONTENT_SELECTOR = "#imageViewContent";
const IMAGE_VIEW_TITLE_SELECTOR = "#imageViewTitle";
const IMAGE_VIEW_EDIT_SELECTOR = "#imageViewEdit";

// placeholder/debug constants
const DEBUG_NUM_STUDENTS = 3;
const DEBUG_STUDENT_NAME_PREFIX = "Student ";
const DEBUG_COLOUR_DICTIONARY = {};
const DEBUG_QUILL_DATA = "<p><b>Hello</b> <u>World</u>!</p>";
for (let i = 1; i <= DEBUG_NUM_STUDENTS; ++i) {
    DEBUG_COLOUR_DICTIONARY[DEBUG_STUDENT_NAME_PREFIX + i] =
        STUDENT_CSS_PREFIX + i;
}
const DEBUG_DATA_ARRAY = new Array(DEBUG_NUM_STUDENTS + 1);
DEBUG_DATA_ARRAY[0] = new Array(DEBUG_NUM_STUDENTS);
for (let i = 1; i <= DEBUG_NUM_STUDENTS; ++i) {
    let list = new Array(4);
    let studentName = DEBUG_STUDENT_NAME_PREFIX + i;
    for (let x = 0; x < 4; ++x) {
        //list[x] = new Item(null, null, "Debug File", studentName, null);
        list[x] = new Item("text", null, "Debug File " + i + ", " + x, studentName, DEBUG_QUILL_DATA);
    }
    /*
    list[0].type = "text";
    list[1].type = "audio";
    list[2].type = "image";
    list[3].type = "video";
    //*/
    DEBUG_DATA_ARRAY[i] = list;

    let submitLI = new Item("text", null, "Debug File", studentName, null);
    DEBUG_DATA_ARRAY[0][i - 1] = submitLI;
}
const DEBUG_SELECTOR = "#debug";

// essential variables
let numStudents = 1; // number of students
let sortableLists; // array of all SortableLists
let itemMasterList = []; // array of all Items, used for sortable order tracking

// Image input, edit, and view variables
let imageStream;
let imageInputVideo = document.getElementById(IMAGE_INPUT_VIDEO_ID);
let imageEditCanvas = $(IMAGE_EDIT_CONTENT_SELECTOR + CANVAS_SELECTOR_SUFFIX).get(0);
let imageEditDisplay = $(IMAGE_EDIT_CONTENT_SELECTOR + IMAGE_DISPLAY_SUFFIX).get(0);
let imageViewDisplay = $(IMAGE_VIEW_CONTENT_SELECTOR + IMAGE_DISPLAY_SUFFIX).get(0);

// set up WYSIWYG editor
let quill = new Quill('#editor', {
    theme: 'snow'
});

init();

// Init page
function init() {
    // Create a SortableList for submit
    sortableLists = new Array(DEBUG_NUM_STUDENTS + 1);
    sortableLists[0] = new SortableList(
        SUBMIT_SORTABLE_SELECTOR,
        $(SUBMIT_SORTABLE_SELECTOR).get(0),
        SUBMIT_OWNER_NAME
    );
    // Create a SortableList for student1 (current user)
    {
        let selector = "#" + STUDENT_SORTABLE_PREFIX + 1;
        sortableLists[1] = new SortableList(
            selector,
            $(selector).get(0),
            DEBUG_STUDENT_NAME_PREFIX + 1
        );
    }

    // Create additional students for debug purposes. 
    while (numStudents < DEBUG_NUM_STUDENTS) {
        ++numStudents;
        let studentName = DEBUG_STUDENT_NAME_PREFIX + numStudents;
        let sortableClass = STUDENT_SORTABLE_PREFIX + numStudents;
        let studentDiv = $(DIV_TAGS).addClass(STUDENT_DIV_CLASS);
        let header = $(STUDENT_NAME_HEADER_TAGS);
        $(header).text(studentName);
        let ul = $(UL_TAGS);
        $(ul).addClass(FILELIST_CLASS).prop(ID, sortableClass);
        $(TEAM_LIST_AREA_SELECTOR).append(studentDiv);
        $(studentDiv).append(header, ul);
        sortableLists[numStudents] = new SortableList(
            "#" + sortableClass,
            $(ul).get(0),
            studentName
        );
    }

    // POPULATE DEBUG ITEMS
    populateDebugItems(); 

    // create sortables from existing lists
    $('.connectedSortable').sortable({
        connectWith: '.connectedSortable',
        cancel: 'li:not(.student1)',
        handle: '.handle',
        update: function(event, ui) {
            // Update SortableList array when items are drag-and-dropped
            let order = $(this).sortable('toArray');;
            let array = sortableLists[(this.id == SUBMIT_SORTABLE_ID) ? 0 : 1].array;
            array.length = order.length;
            for (let i = 0; i < order.length; ++i) {
                array[i] = itemMasterList[order[i]];
            }
            console.log("Order updated: " + order);
        }
    });

    // Add file input setup
    $(TEXT_BUTTON_SELECTOR).click(openTextInputModal);
    $(IMAGE_BUTTON_SELECTOR).click(openImageInputModal);
    $(MODAL_CLOSE_SELECTOR).disableSelection();
 	  $(AUDIO_BUTTON_SELECTOR).click(openAudioRecordModal);
  	$(VIDEO_BUTTON_SELECTOR).click(openVideoRecordModal);

    $(IMAGE_INPUT_SNAP_SELECTOR).click(snapCam);

  	// audio/video start/stop button setup
  	$(AUDIO_RECORD_START_BUTTON_SELECTOR).click(startAudioRecord);
  	$(AUDIO_RECORD_STOP_BUTTON_SELECTOR).click(stopAudioRecord);
  	$(AUDIO_RECORD_DELETE_BUTTON_SELECTOR).click(deleteAudioRecord);
  	$(VIDEO_RECORD_START_BUTTON_SELECTOR).click(startVideoRecord);
  	$(VIDEO_RECORD_STOP_BUTTON_SELECTOR).click(stopVideoRecord);
  	$(VIDEO_RECORD_DELETE_BUTTON_SELECTOR).click(deleteVideoRecord);
}

// Populates debug items.
function populateDebugItems() {
    for (let i = 0; i <= DEBUG_NUM_STUDENTS; ++i) {
        sortableLists[i].array = DEBUG_DATA_ARRAY[i];
        populate(sortableLists[i]);
    }
}

// Populate a sortable list's ul element with li elements for its current array
function populate(sortableList) {
    let items = sortableList.array;
    for (let x = 0; x < items.length; ++x) {
        let item = items[x];
        let li = (item.owner == DEBUG_STUDENT_NAME_PREFIX + 1) ?
            generateSortableLI(item) : generateLI(item);
        $(sortableList.ul).append(li);
    }
}

// Return a new li element for the given item
function generateLI(item) {
    let nameSpan = $(SPAN_TAGS).text(item.name); 
    item.nameSpan = nameSpan; 
    let li = $(LI_TAGS)
      .addClass(UI_STATE_DEFAULT)
      .addClass(DEBUG_COLOUR_DICTIONARY[item.owner])
      .append(nameSpan);
    item.li = li;
    let icon = $(IMG_TAG);
    $(icon).addClass(ICON_CLASS);
    $(icon).attr(SRC, ICON_URLS[item.type]);
    $(li).prepend(icon);
    let id = itemMasterList.length;
    $(li).attr(ID, id);
    itemMasterList[id] = item;
    $(li).click(id, openItem);
    return li;
}

// Return a new sortable li element for the given item
function generateSortableLI(item) {
    let li = generateLI(item);
    let handle = $(IMG_TAG);
    $(handle).addClass(HANDLE_CLASS);
    $(handle).attr(SRC, HANDLE_URL);
    $(li).prepend(handle);
    return li;
}

// Open the text input modal
function openTextInputModal(e) {
    console.log("openTextInputModal(e)");
    let item = e.data;
    if (item) {
        // set fields to item data if item present
        $(TEXT_INPUT_TITLE_SELECTOR).val(item.name);
        quill.root.innerHTML = item.data;
    } else {
        // clear fields if no item present
        clearTextInputModal();
    }
    // change modal close event
    $(MODAL_CLOSE_SELECTOR).off();
    $(MODAL_CLOSE_SELECTOR).click(closeTextInputModal);
    // show correct modal contents
    hideAllModalContent();
    $(TEXT_INPUT_CONTENT_SELECTOR).css(DISPLAY, BLOCK);
    // change submit event
    $(TEXT_INPUT_FORM_SELECTOR).off();
    $(TEXT_INPUT_FORM_SELECTOR).submit(item, submitTextInput);

    openModal();
}

//close the text input modal
function closeTextInputModal() {
    console.log("closeTextInputModal");
    closeModal();
}

// open text view modal
function openTextViewModal(item) {
    console.log("openTextViewModal(item)");
    // Change modal close event
    $(MODAL_CLOSE_SELECTOR).off().click(closeTextViewModal);
    // Set contents to item data
    $(TEXT_VIEW_TITLE_SELECTOR).text(item.name);
    $(TEXT_VIEW_BODY_SELECTOR).html(item.data);
    // change modal contents
    hideAllModalContent();
    $(TEXT_VIEW_CONTENT_SELECTOR).css(DISPLAY, BLOCK);

    // Hides or shows edit and delete buttons based on owner of item.
    let isOwner = item.owner == DEBUG_STUDENT_NAME_PREFIX + 1;
    $(TEXT_VIEW_EDIT_SELECTOR).off().click(item, openTextInputModal).css(DISPLAY, isOwner ? "inline" : NONE);;
    let deleteSelector = TEXT_VIEW_CONTENT_SELECTOR + DELETE_SELECTOR_SUFFIX;
    $(deleteSelector).off().click(item, deleteItem).css(DISPLAY, isOwner ? "inline" : NONE);

    openModal();
}

// close text view modal
function closeTextViewModal() {
    closeModal();
}

// open modal
function openModal() {
    $(MODAL_SELECTOR).css(DISPLAY, BLOCK);
}

// close modal
function closeModal() {
    $(MODAL_SELECTOR).css(DISPLAY, NONE);
}

// input text event
function submitTextInput(e) {
    console.log("submitTextInput(e)");
    e.preventDefault();
    let title = $(TEXT_INPUT_TITLE_SELECTOR).val().trim();
    let studentName = DEBUG_STUDENT_NAME_PREFIX + 1;
    let data = quill.root.innerHTML;
    let item = e.data;
    if (item) {
        if (item.owner != studentName) {
            throw "Editing text while not owner.";
        }
        // modify data of existing item
        item.setName(title); 
        item.data = data;
    } else {
        // create new item
        item = new Item("text", null, title, studentName, data);
        addCaptureToList(item);
    }
    // show new item
    openTextViewModal(item);
    return false; 
}

// Adds a file to student1's sortable as a li element. 
function addCaptureToList(file) {
    let li = generateSortableLI(file);
    let list = sortableLists[1];
    $(list.ul).append(li);
    list.array[list.array.length] = file;
}

// clears text input fields
function clearTextInputModal() {
    $(TEXT_INPUT_TITLE_SELECTOR).val("");
    quill.root.innerHTML = QUILL_BLANK;
}

// Open file event, checks the item type.
function openItem(e) {
    let item = itemMasterList[e.data];
    if (item.type == "text") {
        openTextViewModal(item);
    } else if (item.type == "image") {
        openImageViewModal(item);
    }
	else if (item.type == "audio") {
    	openAudioRecordModal(item);
  	}
  	else if (item.type == "video") {
    	openVideoRecordModal(item);
  	}
}

// Hides all modal content. 
function hideAllModalContent() {
    $(TEXT_INPUT_CONTENT_SELECTOR).css(DISPLAY, NONE);
    $(TEXT_VIEW_CONTENT_SELECTOR).css(DISPLAY, NONE);
    $(IMAGE_INPUT_CONTENT_SELECTOR).css(DISPLAY, NONE);
    $(IMAGE_EDIT_CONTENT_SELECTOR).css(DISPLAY, NONE);
    $(IMAGE_VIEW_CONTENT_SELECTOR).css(DISPLAY, NONE);
	  $(AUDIO_RECORD_CONTENT_SELECTOR).css("display", "none");
  	$(VIDEO_RECORD_CONTENT_SELECTOR).css("display", "none");
}

// Delete item
function deleteItem(e) {
    let item = e.data;
    if (item.owner != DEBUG_STUDENT_NAME_PREFIX + 1) {
        throw "Deleting file without being owner.";
    }
    let li = e.data.li;

    // set id in masterlist to null
    let liID = parseInt($(e.data.li).attr(ID));
    console.log(liID);
    itemMasterList[liID] = null;

    // find which list it's in
    let sortableID = $(li).parent().attr(ID);
    let sortableIndex = sortableID == SUBMIT_SORTABLE_ID ? 0 : parseInt(sortableID.substring(STUDENT_SORTABLE_PREFIX.length));
    console.log(sortableIndex);
    let sortable = sortableLists[sortableIndex];

    // delete the element
    $(li).remove()

    // adjust the internal array 
    let array = sortable.array;
    let found = -1;
    for (let i = 0; i < array.length; ++i) {
        if (array[i] == item) {
            found = i;
            break;
        }
    }
    if (found < 0) {
        throw "Item to be deleted, but not found in sortable array."
    }
    array.splice(found, 1);
    console.log(sortable.array);

    $(MODAL_CLOSE_SELECTOR).trigger(CLICK);
}

// IMAGE CAPTURE

// open the image input (cam) modal
function openImageInputModal() {
    imageStream = null;
    hideAllModalContent();
    $(IMAGE_INPUT_CONTENT_SELECTOR).css(DISPLAY, BLOCK);
    $(IMAGE_INPUT_MESSAGE_AREA_SELECTOR).text(CAM_LOADING_MSG);
    $(IMAGE_INPUT_MESSAGE_AREA_SELECTOR).css(DISPLAY, BLOCK);
    $(IMAGE_INPUT_STREAM_AREA_SELECTOR).css(DISPLAY, NONE);
    $(MODAL_CLOSE_SELECTOR).off().click(closeImageInputModal);
    openModal();
    startImageCamera();
}

// close the image input (cam) modal
function closeImageInputModal() {
    stopImageInputStream();
    closeModal();
}

// Start the camera
function startImageCamera() {
    navigator.mediaDevices.getUserMedia(PHOTO_CONSTRAINTS)
        .then(function(stream) {
            // success
            // save stream
            imageStream = stream;
            // set video to stream
            imageInputVideo.srcObject = stream;
            // Switch from message view to stream view.
            $(IMAGE_INPUT_MESSAGE_AREA_SELECTOR).css(DISPLAY, NONE);
            $(IMAGE_INPUT_STREAM_AREA_SELECTOR).css(DISPLAY, BLOCK);
            // control video display size
            let settings = stream.getTracks()[0].getSettings();
            let width = settings.width; 
            let height = settings.height; 
            imageInputVideo.style.maxWidth = width + PX; 
            imageInputVideo.style.maxHeight = height + PX; 
        })
        .catch(function() {
            // failure, display message
            $(IMAGE_INPUT_MESSAGE_AREA_SELECTOR).text(CAM_FAILED_MSG);
        });
}

// take a photo from cam
function snapCam() {
    if (!imageStream) {
        throw "snapCam() imageStream is null"
    }
    // draw video onto canvas
    let canvas = imageEditCanvas;
    let video = imageInputVideo;
    let width = video.videoWidth;
    let height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    // save canvas view as image
    let data = canvas.toDataURL(IMAGE_INPUT_TYPE);
    // create item object, move to image edit modal
    let item = new Item("image", "png", null, DEBUG_STUDENT_NAME_PREFIX + 1, data);
    item.width = width; 
    item.height = height; 
    openImageEditContent(item);
}

// open the image edit modal, where you change the title
function openImageEditContent(item) {
    hideAllModalContent();
    // stop cam
    stopImageInputStream();
    // set image content and size
    imageEditDisplay.src = item.data;
    imageEditDisplay.style.maxWidth = item.width + PX; 
    imageEditDisplay.style.maxHeight = item.height + PX; 
    // display modal
    $(IMAGE_EDIT_CONTENT_SELECTOR).css(DISPLAY, BLOCK);
    // set event listeners
    $(IMAGE_EDIT_FORM_SELECTOR).off().submit(item, imageEditSubmit);
    $(IMAGE_EDIT_TITLE_SELECTOR).val(item.title == null ? "" : item.title);
    $(MODAL_CLOSE_SELECTOR).off().click(closeImageEditModal);
}

// close the image edit modal
function closeImageEditModal() {
    closeModal();
}

// stop the camera stream
function stopImageInputStream() {
    if (imageStream) {
        imageStream.getTracks()[0].stop();
        imageStream = null;
    }
}

// Save the image, then show the image
function imageEditSubmit(e) {
    e.preventDefault();
    let item = e.data;
    let newItem = item.name == null;
    let newName = $(IMAGE_EDIT_TITLE_SELECTOR).val().trim();
    if (newItem) {
        // add item to sortables if new
        item.name = newName; 
        addCaptureToList(item);
    } else {
      // else modify name
      item.setName(newName); 
    }
    // show the image
    openImageViewModal(item);
    return false; 
}

// open the iamge view modal
function openImageViewModal(item) {
    // change modal close event
    $(MODAL_CLOSE_SELECTOR).off().click(closeImageViewModal);
    // change modal contents
    hideAllModalContent();
    $(IMAGE_VIEW_CONTENT_SELECTOR).css(DISPLAY, BLOCK);
    // change contents to item data
    $(IMAGE_VIEW_TITLE_SELECTOR).text(item.name);
    imageViewDisplay.src = item.data;
    imageViewDisplay.style.maxWidth = item.width + PX; 
    imageViewDisplay.style.maxHeight = item.height + PX; 

    // hides or shows edit and delete buttons based on owner of item
    let isOwner = item.owner == DEBUG_STUDENT_NAME_PREFIX + 1;
    $(IMAGE_VIEW_EDIT_SELECTOR).off().click(item, openImageEditModal).css(DISPLAY, isOwner ? "inline" : NONE);;
    let deleteSelector = IMAGE_VIEW_CONTENT_SELECTOR + DELETE_SELECTOR_SUFFIX;
    $(deleteSelector).off().click(item, deleteItem).css(DISPLAY, isOwner ? "inline" : NONE);

    openModal();
}

// open the image edit modal from the image view modal
function openImageEditModal(e) {
    let item = e.data;
    let studentName = DEBUG_STUDENT_NAME_PREFIX + 1;
    if (item.owner != studentName) {
        throw "Opening edit for image not owned";
    }
    openImageEditContent(item);
}

// Close the image view modal
function closeImageViewModal() {
    closeModal();
}

var recorder;
var chunks;
var counter = 1;
var mediaOption;
let mediaStream;

function openAudioRecordModal(item)
{
  let isOwner = item.owner === undefined || item.owner == DEBUG_STUDENT_NAME_PREFIX + 1;
  let displayDeleteFile = isOwner;

  if (isOwner)
  {
    // init media option
    mediaOption = {
      tag: 'audio',
      type: 'audio/wav',
      ext: '.wav',
      gUM: {audio: true, video: false}
    };

    // request using mic 
    navigator.mediaDevices.getUserMedia(mediaOption.gUM).then(_stream => {
      mediaStream = _stream;
      recorder = new MediaRecorder(mediaStream);
      recorder.ondataavailable = e => {
          chunks.push(e.data);
          if(recorder.state == 'inactive')
          {
            makeAudioBlob();
          }
      };
    })
    .catch(function()
    {
      $(AUDIO_RECORD_FORM_SELECTOR).text(AUDIO_RECORD_FAILED_MSG);
    });
  }

  // clear previous record data
  let control = document.getElementById(AUDIO_RECORD_CONTROL);
  while (control.hasChildNodes())
  {
    control.removeChild(control.lastChild);
  }

  // add item data if exists
  if (item != null && item.data != null)
  {
    addMediaList(item.data, AUDIO_RECORD_CONTROL);
    $(AUDIO_RECORD_TITLE_SELECTOR).val(item.name);
  }
  else
  {
    $(AUDIO_RECORD_TITLE_SELECTOR).val("");
    displayDeleteFile = false;
  }

  // change modal close event
  $(MODAL_CLOSE_SELECTOR).off();
  $(MODAL_CLOSE_SELECTOR).click(closeMediaModal);
  // show correct modal contents
  hideAllModalContent(); 
  $(AUDIO_RECORD_CONTENT_SELECTOR).css("display", "block"); 
  if (isOwner)
  {
    $(AUDIO_RECORD_START_BUTTON_SELECTOR).css("display", "block");
  }
  else
  {
    $(AUDIO_RECORD_START_BUTTON_SELECTOR).css("display", "none");
  }
  $(AUDIO_RECORD_STOP_BUTTON_SELECTOR).css("display", "none");
  // change submit event
  $(AUDIO_RECORD_FORM_SELECTOR).off(); 
  $(AUDIO_RECORD_FORM_SELECTOR).submit(item, submitAudioRecord); 

  // delete file button
  $(AUDIO_RECORD_DELETE_FILE_BUTTON_SELECTOR).off().click(item, deleteItem).css("display", displayDeleteFile ? "inline" : "none"); 

  openModal();
}

function openVideoRecordModal(item)
{
  let isOwner = item.owner === undefined || item.owner == DEBUG_STUDENT_NAME_PREFIX + 1;
  let displayDeleteFile = isOwner;

  if (isOwner)
  {
    // init media option
    mediaOption = {
      tag: 'video',
      type: 'video/mp4',
      ext: '.mp4',
      gUM: {video: true, audio: true}
    };  

    // request using mic and camera
    navigator.mediaDevices.getUserMedia(mediaOption.gUM).then(_stream => {
      mediaStream = _stream;
      recorder = new MediaRecorder(mediaStream);
      recorder.ondataavailable = e => {
          chunks.push(e.data);
          if(recorder.state == 'inactive')
          {
            makeVideoBlob();
          }
      };
    })
    .catch(function() {
      $(VIDEO_RECORD_FORM_SELECTOR).text(VIDEO_RECORD_FAILED_MSG);
    });
  }

  // clear previous record data
  let control = document.getElementById(VIDEO_RECORD_CONTROL);
  while (control.hasChildNodes())
  {
    control.removeChild(control.lastChild);
  }

  // add item data if exists
  if (item != null && item.data != null)
  {
    addMediaList(item.data, VIDEO_RECORD_CONTROL);
    $(VIDEO_RECORD_TITLE_SELECTOR).val(item.name);
  }
  else
  {
    $(VIDEO_RECORD_TITLE_SELECTOR).val("");
    displayDeleteFile = false;
  }

  // change modal close event
  $(MODAL_CLOSE_SELECTOR).off();
  $(MODAL_CLOSE_SELECTOR).click(closeMediaModal);
  // show correct modal contents
  hideAllModalContent(); 
  $(VIDEO_RECORD_CONTENT_SELECTOR).css("display", "block"); 
  $(VIDEO_RECORD_START_BUTTON_SELECTOR).css("display", isOwner ? "block" : "none");
  $(VIDEO_RECORD_STOP_BUTTON_SELECTOR).css("display", "none");
  // change submit event
  $(VIDEO_RECORD_FORM_SELECTOR).off(); 
  $(VIDEO_RECORD_FORM_SELECTOR).submit(item, submitVideoRecord);

  // delete file button
  $(VIDEO_RECORD_DELETE_FILE_BUTTON_SELECTOR).off().click(item, deleteItem).css("display", displayDeleteFile ? "inline" : "none"); 
  
  openModal(); 
}

// add media srcs to media modal
function addMediaList(srcs, controlId)
{
    for (let i = 0; i < srcs.length; ++i)
    {
      let mediaTag = document.createElement(mediaOption.tag);
      mediaTag.controls = true;
      mediaTag.src = srcs[i];
      addMediaData(mediaTag, controlId);
    }
}

// close audio/video modal
function closeMediaModal()
{
  if (mediaStream) {
    let tracks = mediaStream.getTracks();
    for (let i = 0; i < tracks.length; ++i)
    {
      tracks[i].stop();
    }
    mediaStream = null;
  }

  closeModal();
}

// start audio record
function startAudioRecord()
{
    chunks = [];
    recorder.start();
    $(AUDIO_RECORD_START_BUTTON_SELECTOR).css("display", "none");
    $(AUDIO_RECORD_STOP_BUTTON_SELECTOR).css("display", "block");
}

// stop audio record
function stopAudioRecord()
{
    recorder.stop();
    $(AUDIO_RECORD_START_BUTTON_SELECTOR).css("display", "block");
    $(AUDIO_RECORD_STOP_BUTTON_SELECTOR).css("display", "none");
}

// start video record
function startVideoRecord()
{
    chunks = [];
    recorder.start();
    $(VIDEO_RECORD_START_BUTTON_SELECTOR).css("display", "none");
    $(VIDEO_RECORD_STOP_BUTTON_SELECTOR).css("display", "block");
}

// stop video record
function stopVideoRecord()
{
    recorder.stop();
    $(VIDEO_RECORD_START_BUTTON_SELECTOR).css("display", "block");
    $(VIDEO_RECORD_STOP_BUTTON_SELECTOR).css("display", "none");
}

// make audio data
function makeAudioBlob()
{
  let mediaTag = makeMediaTag();
  addMediaData(mediaTag, AUDIO_RECORD_CONTROL);
}

// make video data
function makeVideoBlob()
{
  let mediaTag = makeMediaTag();
  mediaTag.className += VIDEO_RECORD_VIDEO_CLASS;
  addMediaData(mediaTag, VIDEO_RECORD_CONTROL);
}

// add media data
function addMediaData(mediaTag, controlId)
{
  let control = document.getElementById(controlId);
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  control.appendChild(checkbox);
  control.appendChild(mediaTag);
  control.appendChild(document.createElement("br"));
}

// make media data blob
function makeMediaTag() {
    let reader = new FileReader();
    let blob = new Blob(chunks, {type: mediaOption.type});
    let url = URL.createObjectURL(blob);
    let mediaTag = document.createElement(mediaOption.tag);

    // for ios safari
    let source = document.createElement("source");
    reader.onload = function(e){
        source.src = reader.result;
    }
    source.type = mediaOption.type;
    reader.readAsDataURL(blob);

    // for chrome
    let source2 = document.createElement("source");
    source2.src = url;
    source2.type = mediaOption.type;

    mediaTag.controls = true;
    mediaTag.appendChild(source);
    mediaTag.appendChild(source2);

    return mediaTag;
}

// delete audio record
function deleteAudioRecord()
{
  let control = document.getElementById(AUDIO_RECORD_CONTROL);
  for (let i = 0; i < control.children.length;)
  {
    if (control.children[i].checked)
    {
      control.removeChild(control.children[i]);
      control.removeChild(control.children[i]);
      control.removeChild(control.children[i]);
    }
    else
    {
      i += 3;
    }
  }
}

// delete video record
function deleteVideoRecord()
{
  let control = document.getElementById(VIDEO_RECORD_CONTROL);
  for (let i = 0; i < control.children.length;)
  {
    if (control.children[i].checked)
    {
      control.removeChild(control.children[i]);
      control.removeChild(control.children[i]);
      control.removeChild(control.children[i]);
    }
    else
    {
      i += 3;
    }
  }
}

// submit audio
function submitAudioRecord(e)
{
  console.log("submitAudioRecord(e)"); 
  e.preventDefault(); 
  let title = $(AUDIO_RECORD_TITLE_SELECTOR).val().trim();
  let studentName = DEBUG_STUDENT_NAME_PREFIX + 1; 
  let data = [];
  
  let control = document.getElementById(AUDIO_RECORD_CONTROL);
  for (let i = 0; i < control.children.length;++i)
  {
    if (control.children[i].tagName == "AUDIO")
    {
      data.push(control.children[i].src);
    }
  }

  if (e.data === null || e.data.name === undefined)
  {
    // create new item
    item = new Item("audio", null, title, studentName, data);
    addCaptureToList(item);   
  }
  else
  {
    e.data.setName(title);
    e.data.data = data;
  }

  closeModal();
}

// submit video
function submitVideoRecord(e)
{
  console.log("submitVideoRecord(e)"); 
  e.preventDefault(); 
  let title = $(VIDEO_RECORD_TITLE_SELECTOR).val().trim();
  let studentName = DEBUG_STUDENT_NAME_PREFIX + 1; 
  let data = [];
  
  let control = document.getElementById(VIDEO_RECORD_CONTROL);
  for (let i = 0; i < control.children.length;++i)
  {
    if (control.children[i].tagName == "VIDEO")
    {
      data.push(control.children[i].src);
    }
  }
  
  if (e.data === null || e.data.name === undefined)
  {
    // create new item
    item = new Item("video", null, title, studentName, data);
    addCaptureToList(item);   
  }
  else
  {
    e.data.setName(title);
    e.data.data = data;
  }

  closeModal();
}