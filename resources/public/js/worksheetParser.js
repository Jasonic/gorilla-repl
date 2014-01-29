worksheetParser = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { worksheet: peg$parseworksheet },
        peg$startRuleFunction  = peg$parseworksheet,

        peg$c0 = peg$FAILED,
        peg$c1 = [],
        peg$c2 = function(seg) {return seg;},
        peg$c3 = ";; gorilla-repl.fileformat = 1\n\n",
        peg$c4 = { type: "literal", value: ";; gorilla-repl.fileformat = 1\n\n", description: "\";; gorilla-repl.fileformat = 1\\n\\n\"" },
        peg$c5 = null,
        peg$c6 = "\n",
        peg$c7 = { type: "literal", value: "\n", description: "\"\\n\"" },
        peg$c8 = function(content) {return freeSegment(unmakeClojureComment(content));},
        peg$c9 = ";; **\n",
        peg$c10 = { type: "literal", value: ";; **\n", description: "\";; **\\n\"" },
        peg$c11 = "\n;; **\n",
        peg$c12 = { type: "literal", value: "\n;; **\n", description: "\"\\n;; **\\n\"" },
        peg$c13 = function(content, cs, out) {return codeSegment(content, unmakeClojureComment(cs), unmakeClojureComment(out));},
        peg$c14 = ";; @@\n",
        peg$c15 = { type: "literal", value: ";; @@\n", description: "\";; @@\\n\"" },
        peg$c16 = "\n;; @@\n",
        peg$c17 = { type: "literal", value: "\n;; @@\n", description: "\"\\n;; @@\\n\"" },
        peg$c18 = function(output) {return output;},
        peg$c19 = ";; =>\n",
        peg$c20 = { type: "literal", value: ";; =>\n", description: "\";; =>\\n\"" },
        peg$c21 = "\n;; <=\n",
        peg$c22 = { type: "literal", value: "\n;; <=\n", description: "\"\\n;; <=\\n\"" },
        peg$c23 = function(cs) {return cs;},
        peg$c24 = ";; ->\n",
        peg$c25 = { type: "literal", value: ";; ->\n", description: "\";; ->\\n\"" },
        peg$c26 = "\n;; <-\n",
        peg$c27 = { type: "literal", value: "\n;; <-\n", description: "\"\\n;; <-\\n\"" },
        peg$c28 = function(cs) {return cs.join("");},
        peg$c29 = void 0,
        peg$c30 = { type: "any", description: "any character" },
        peg$c31 = function(c) {return c;},

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parseworksheet() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseworksheetHeader();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsesegmentWithBlankLine();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsesegmentWithBlankLine();
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c2(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseworksheetHeader() {
      var s0;

      if (input.substr(peg$currPos, 32) === peg$c3) {
        s0 = peg$c3;
        peg$currPos += 32;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }

      return s0;
    }

    function peg$parsesegmentWithBlankLine() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsesegment();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 10) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c7); }
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c5;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c2(s1);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsesegment() {
      var s0;

      s0 = peg$parsefreeSegment();
      if (s0 === peg$FAILED) {
        s0 = peg$parsecodeSegment();
      }

      return s0;
    }

    function peg$parsefreeSegment() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsefreeSegmentOpenTag();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestringNoDelim();
        if (s2 === peg$FAILED) {
          s2 = peg$c5;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsefreeSegmentCloseTag();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c8(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsefreeSegmentOpenTag() {
      var s0;

      if (input.substr(peg$currPos, 6) === peg$c9) {
        s0 = peg$c9;
        peg$currPos += 6;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }

      return s0;
    }

    function peg$parsefreeSegmentCloseTag() {
      var s0;

      if (input.substr(peg$currPos, 7) === peg$c11) {
        s0 = peg$c11;
        peg$currPos += 7;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c12); }
      }

      return s0;
    }

    function peg$parsecodeSegment() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parsecodeSegmentOpenTag();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestringNoDelim();
        if (s2 === peg$FAILED) {
          s2 = peg$c5;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsecodeSegmentCloseTag();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseconsoleSection();
            if (s4 === peg$FAILED) {
              s4 = peg$c5;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseoutputSection();
              if (s5 === peg$FAILED) {
                s5 = peg$c5;
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c13(s2, s4, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parsecodeSegmentOpenTag() {
      var s0;

      if (input.substr(peg$currPos, 6) === peg$c14) {
        s0 = peg$c14;
        peg$currPos += 6;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c15); }
      }

      return s0;
    }

    function peg$parsecodeSegmentCloseTag() {
      var s0;

      if (input.substr(peg$currPos, 7) === peg$c16) {
        s0 = peg$c16;
        peg$currPos += 7;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }

      return s0;
    }

    function peg$parseoutputSection() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseoutputOpenTag();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestringNoDelim();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseoutputCloseTag();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c18(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseoutputOpenTag() {
      var s0;

      if (input.substr(peg$currPos, 6) === peg$c19) {
        s0 = peg$c19;
        peg$currPos += 6;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }

      return s0;
    }

    function peg$parseoutputCloseTag() {
      var s0;

      if (input.substr(peg$currPos, 7) === peg$c21) {
        s0 = peg$c21;
        peg$currPos += 7;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c22); }
      }

      return s0;
    }

    function peg$parseconsoleSection() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseconsoleOpenTag();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsestringNoDelim();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseconsoleCloseTag();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c23(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parseconsoleOpenTag() {
      var s0;

      if (input.substr(peg$currPos, 6) === peg$c24) {
        s0 = peg$c24;
        peg$currPos += 6;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }

      return s0;
    }

    function peg$parseconsoleCloseTag() {
      var s0;

      if (input.substr(peg$currPos, 7) === peg$c26) {
        s0 = peg$c26;
        peg$currPos += 7;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c27); }
      }

      return s0;
    }

    function peg$parsestringNoDelim() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsenoDelimChar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsenoDelimChar();
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c28(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsedelimiter() {
      var s0;

      s0 = peg$parsefreeSegmentOpenTag();
      if (s0 === peg$FAILED) {
        s0 = peg$parsefreeSegmentCloseTag();
        if (s0 === peg$FAILED) {
          s0 = peg$parsecodeSegmentOpenTag();
          if (s0 === peg$FAILED) {
            s0 = peg$parsecodeSegmentCloseTag();
            if (s0 === peg$FAILED) {
              s0 = peg$parseoutputOpenTag();
              if (s0 === peg$FAILED) {
                s0 = peg$parseoutputCloseTag();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseconsoleOpenTag();
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseconsoleCloseTag();
                  }
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsenoDelimChar() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parsedelimiter();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c29;
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c30); }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c31(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
