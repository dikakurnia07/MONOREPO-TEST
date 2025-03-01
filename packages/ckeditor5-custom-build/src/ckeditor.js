/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
// import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Link from "@ckeditor/ckeditor5-link/src/link";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";
import List from "@ckeditor/ckeditor5-list/src/list";
import ListProperties from "@ckeditor/ckeditor5-list/src/listproperties";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import SelectAll from "@ckeditor/ckeditor5-select-all/src/selectall";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableColumnResize from "@ckeditor/ckeditor5-table/src/tablecolumnresize";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";

import { MediaLib } from "./plugins/mediaLib";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  Code,
  CodeBlock,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlEmbed,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  // ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  MediaLib,
  Paragraph,
  PasteFromOffice,
  RemoveFormat,
  SelectAll,
  SpecialCharacters,
  SpecialCharactersEssentials,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TodoList,
  Underline,
  WordCount,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "undo",
      "redo",
      "|",
      "findAndReplace",
      "selectAll",
      "|",
      "heading",
      "|",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "superscript",
      "subscript",
      "code",
      "removeFormat",
      "-",
      "link",
      // "imageUpload",
      "mediaEmbed",
      "mediaLib",
      "insertTable",
      "horizontalLine",
      "blockQuote",
      "codeBlock",
      "htmlEmbed",
      "specialCharacters",
      "highlight",
      "|",
      "alignment",
      "|",
      "bulletedList",
      "numberedList",
      "todoList",
      "outdent",
      "indent",
    ],
    shouldNotGroupWhenFull: true,
  },
  language: "en",
  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "ck-heading_paragraph",
      },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "Heading 4",
        class: "ck-heading_heading4",
      },
    ],
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  image: {
    resizeUnit: "%",
    resizeOptions: [
      {
        name: "resizeImage:original",
        value: null,
        icon: "original",
      },
      {
        name: "resizeImage:25",
        value: "25",
        icon: "small",
      },
      {
        name: "resizeImage:50",
        value: "50",
        icon: "medium",
      },
      {
        name: "resizeImage:75",
        value: "75",
        icon: "large",
      },
    ],
    toolbar: [
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "|",
      "toggleImageCaption",
      "imageTextAlternative",
      "|",
      "linkImage",
      "|",
      "resizeImage:25",
      "resizeImage:50",
      "resizeImage:75",
      "resizeImage:original",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "|",
      "tableCellProperties",
      "tableProperties",
      "|",
      "toggleTableCaption",
    ],
  },
  fontSize: {
    options: [9, 11, 13, "default", 17, 19, 21, 27, 35],
    supportAllValues: false,
  },
  fontFamily: {
    options: [
      "default",
      "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
      "Courier New, Courier, monospace",
      "Georgia, serif",
      "Lucida Sans Unicode, Lucida Grande, sans-serif",
      "Tahoma, Geneva, sans-serif",
      "Times New Roman, Times, serif",
      "Trebuchet MS, Helvetica, sans-serif",
      "Verdana, Geneva, sans-serif",
      "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
    ],
    supportAllValues: true,
  },
  fontColor: {
    columns: 5,
    documentColors: 10,
  },
  fontBackgroundColor: {
    columns: 5,
    documentColors: 10,
  },
  mediaEmbed: {
    extraProviders: [
      {
        name: "Instagram Reels",
        url: /instagram\.com\/reel\/([a-zA-Z0-9_-]+)/,
        html: (match) => {
          const reelId = match[1];
          return (
            `<iframe width="400" height="480" src="https://www.instagram.com/reel/${reelId}/embed" ` +
            `frameborder="0" allowfullscreen></iframe>`
          );
        },
      },
      {
        name: "X",
        url: /^x\.com\/(\w+)/,
        html: (match) => {
          return (
            '<div style="width: 100%; background-color: #000; max-height: 200px; padding: 16px; display: flex; flex-direction: column; justify-content: center; align-items: center;">' +
            '<img style="height: 50px; width: 90px;" src="https://akcdn.detik.net.id/visual/2023/07/24/logo-twitter-terbaru_169.jpeg?w=650&q=90"></img>' +
            `<a href=${match.input} style="font-style: italic; text-align: center; color: #FFF;">${match.input}</a>` +
            "</div>"
          );
        },
      },
      {
        name: "YouTube Shorts",
        url: /youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/,
        html: (match) => {
          const shortId = match[1];
          return (
            `<iframe width="100%" height="400" ` +
            `src="https://www.youtube.com/embed/${shortId}" ` +
            `frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ` +
            `allowfullscreen></iframe>`
          );
        },
      },
    ],
  },
};

export default Editor;
