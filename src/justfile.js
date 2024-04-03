/*
Language: Justfileπ
Author: Gaetan Semet <gaetan@xeberon.net>
Description: Justfile is a handy way to save and run project-specific commands.
Category: common, scripting
Website: https://github.com/casey/just
*/

var module = module ? module : {};  // shim for browser use

function hljsDefineJustfile(hljs) {
  const UNDERSCORE_HYPHEN_IDENT_RE = '[a-zA-Z_\\-\\w]+';
  /* Variables: simple (eg {{var}})*/
  const VARIABLE = {
    className: 'variable',
    variants: [
      {
        begin: '\\{\\{\\s*' + UNDERSCORE_HYPHEN_IDENT_RE + '\\s*\\}\\}',
        contains: [ hljs.BACKSLASH_ESCAPE ]
      }
    ]
  };
  const BACKTICK_STRING = {
    className: 'string',
    begin: /`/,
    end: /`/,
    contains: [ hljs.BACKSLASH_ESCAPE ]
  };

  /* Quoted string with variables inside */
  const QUOTE_STRING = {
    className: 'string',
    begin: /"/,
    end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VARIABLE
    ]
  };
  /* simple quote string with variables inside */
  const SIMPLE_QUOTE_STRING = {
    className: 'string',
    begin: /'/,
    end: /'/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VARIABLE
    ]
  };
  /* Variable assignment */
  const ASSIGNMENT = {
    begin: '^' + UNDERSCORE_HYPHEN_IDENT_RE + '\\s*(:=)'
  };
  /* Targets */
  const TARGET = {
    className: 'section',
    begin: /^@?\w+[\w\-\_\w\s\*\+]*:(|[\s\w\&\|]*|)$/,
    end: /$/,
    contains: [ VARIABLE ]
  };
  const KEYWORDS = {
    $pattern: /[\w-]+/,
    keyword: 'if else import import? mod mod? export set alias'
  };
  return {
    name: 'Justfile',
    aliases: [
      'just',
    ],
    // disableAutodetect: true,
    keywords: KEYWORDS,
    contains: [
      hljs.HASH_COMMENT_MODE,
      VARIABLE,
      QUOTE_STRING,
      BACKTICK_STRING,
      SIMPLE_QUOTE_STRING,
      ASSIGNMENT,
      TARGET
    ]
  }
};

module.exports = function(hljs) {
    hljs.registerLanguage('Justfile', hljsDefineJustfile);
};

module.exports.definer = hljsDefineJustfile;
