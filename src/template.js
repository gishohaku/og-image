const modernNormalize = `
/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
	box-sizing: border-box;
}

/**
1. Correct the line height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size (opinionated).
*/

html {
	line-height: 1.15; /* 1 */
	-webkit-text-size-adjust: 100%; /* 2 */
	-moz-tab-size: 4; /* 3 */
	tab-size: 4; /* 3 */
}

/*
Sections
========
*/

/**
1. Remove the margin in all browsers.
2. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
*/

body {
	margin: 0; /* 1 */
	font-family:
		system-ui,
		-apple-system,
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji'; /* 2 */
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}
`;

const getHtml = (props) => {
  const { circle, name, image } = props;
  console.log(props);
  return `<html>
    <head>
      <meta charset="UTF-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700" rel="stylesheet">
    </head>
    <body class="bg-green" style="font-feature-settings: 'palt';">
      <style>
        ${modernNormalize}
        body {
          font-family: 'Noto Sans JP', sans-serif;
        }
        :root {
          --green: #3FBD92;
          --blue: #328BB6;
        }
        .flex {
          display: flex;
        }
        .bg-green {
          background-color: var(--green);
        }
        .bg-white {
          background-color: white;
        }
        .relative {
          position: relative;
        }
        .absolute {
          position: absolute;
        }
        .w-full {
          width: 100%;
        }
      </style>
      <div class="flex bg-white" style="border-radius: 10px; height: calc(100% - 64px); margin: 32px; padding: 32px;">
        ${!!image ? `<img style="object-fit: contain;" src="${image}"/>` : ""}
        <div class="flex relative w-full" style="flex-direction: column; margin-left: 32px; justify-content: center;">
          <!-- TODO: 新刊ラベル -->
          <div style="margin-top: -16px;">
            <div style="font-size: 32px;">${circle}</div>
            <div style="font-size: 64px; margin-top: 4px;">${name}</div>
          </div>
          <div class="absolute" style="right: 0; bottom: 0;">
            <img width="150" height="75" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NjUuNTEgMzMzLjE3Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzA0MDAwMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPuOCouODvOODiOODnOODvOODiSAzMDwvdGl0bGU+PGcgaWQ9IuODrOOCpOODpOODvF83IiBkYXRhLW5hbWU9IuODrOOCpOODpOODvCA3Ij48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNTMuNTcsMTUwLjEzLDE5NC4yNCw3OWgtNDdWNDcuMTFIMTk3LjNWMjcuMjVIMTQ3LjIxVi4zNUgxMjYuNjV2MjYuOUg3OS4zM1Y0Ny4xMWg0Ny4zMlY3OUg4My4xOHY0QTE1LjgzLDE1LjgzLDAsMCwwLDk5LDk4LjloNTcuMjNMMTM4LjY1LDEzMGwtOS40OC0xMi44MUgxMDQuM2wyMy40MSwzMi4xNC0uMjEuMzdMNjcuMTMsMjEwLjQ5SDk2LjY2TDEzOS45LDE2NmwyNS4yOCwzNC43YTIzLjczLDIzLjczLDAsMCwwLDE5LjE3LDkuNzZoMTMuODhaTTIzLjgzLDIxMC40OWgyMC4zdi05N2w5Ljg5LTRBMTguMTUsMTguMTUsMCwwLDAsNjUuMzksOTIuNjdWODMuMDZsLTIxLjI2LDguM1Y1Ni45MUg2Ny4zMVYzNi44SDQ0LjEzVi4zNUgyMy44M1YzNi44SDBWNTYuOTFIMjMuODN2NDIuNUwwLDEwOC43MnYyMi4xMmwyMy44My05LjU1Wm0zOTEuNDMtMjEuNzZWMTYyLjE1YTIxLjc1LDIxLjc1LDAsMCwwLTIxLjc1LTIxLjc1SDI2My4zNHY3MC4wOUgzOTMuNTFBMjEuNzUsMjEuNzUsMCwwLDAsNDE1LjI2LDE4OC43M1ptLTEzMy4xMyw1VjE4My4xOUgzNzB2LTE1LjVIMjgyLjEzVjE1Ni44N2gxMDUuMWE5LjI0LDkuMjQsMCwwLDEsOS4yNCw5LjI0djE4LjQxYTkuMjQsOS4yNCwwLDAsMS05LjI0LDkuMjRabTE1MC42OC03OC4zMkgzNDguMDl2LTkuNzFoNDIuMzZWOTAuNTRIMzQ4LjA5Vjc4LjQyaDYxLjE5VjUzLjczaDIwLjQ2VjM4LjA4SDQwOS4yOFYyNy45YzAtNy44Ny02LTE0LjI1LTEzLjM4LTE0LjI1SDM0OC4wOVYwaC0xNy42VjEzLjY1SDI3MS4xOFYyOS4wOWg1OS4zMXY5SDI0OC44NlY1My43M2g4MS42M3Y4Ljc0SDI3MS4xOHYxNmg1OS4zMVY5MC41NGgtNDIuMXYxNS4xOWg0Mi4xdjkuNzFoLTg0Ljd2MTYuNjhoMTg3Wk0zNDguNDgsMjkuMjloMzcuMTZBNS42OCw1LjY4LDAsMCwxLDM5MS4zMiwzNXYzLjI2SDM0OC40OFptMCwyNC41MWg0Mi44NHY4LjY5SDM0OC40OFptMzE3LTM3LjQ0TDY1NC44NS41Nkg2MzFsMTAuNjYsMTUuOFpNNDk0LDIxMC43aDIwLjI5VjczLjIyaDIwLjkyVjUzLjFINTE0LjI3VjFINDk0VjUzLjFoLTIzLjdWNzMuMjJINDk0Wk02NTAsNDkuMTdINjEyLjc2VjQwLjUyaDQ4LjYyVjIyLjQzSDYxMi43NlYxSDU5NFYyMi40M0g1NDQuMTZWNDAuNTJINTk0djguNjVINTQ2LjU3djcyLjYySDY2NC4yNFY2My4zN0ExNC4yLDE0LjIsMCwwLDAsNjUwLDQ5LjE3Wk01OTQsMTA1LjZINTYzLjEyVjk0SDU5NFptMC0yOS4xNkg1NjMuMTJWNjUuMzdINTk0Wm01MywyOS4xNkg2MTIuNzZWOTRINjQ3Wm0wLTI5LjE2SDYxMi43NlY2NS4zN2gyOC41MkE1LjY3LDUuNjcsMCwwLDEsNjQ3LDcxWk02MDYuODksMjAxLjMzbC0yMi4zMS0yOC4yNkg1NjIuODFsMjIuMywyOC4yNlptMzUuOTMtNzEuODlINjIxLjU3djguODNoLTkyLjF2MTkuNDRoOTIuMXYzOC44NkExNC4xMywxNC4xMywwLDAsMCw2MzUuNywyMTAuN2g3LjEydi01M2gyMS40MlYxMzguMjdINjQyLjgyWk01NTkuOTQsMjU2LjUybC0yOS4xMywzMy41Niw0LjQ4LTMzLjU2SDUxOS42NWwtOS44Myw3NC41N2gxNS42OWwyLjMxLTE3Ljc4LDkuODEtMTEsMTYuMTMsMjguOGgxNy41M2wtMjMuMzYtNDAuMzYsMzAuNDUtMzQuMjFabTcxLjEzLDM3YzAsLjItLjA5LjU2LS4xNSwxLjA3cS0xLjc4LDEzLjU0LTQuNjQsMTguMjNhMTUuMywxNS4zLDAsMCwxLTUuNzYsNS41MywxNi43NCwxNi43NCwwLDAsMS04LDEuODZxLTYuNDgsMC05Ljg2LTMuNTR0LTMuMzktMTAuNDJjMC0xLjQ5LDAtMi44Ny4xLTQuMTJzLjE3LTIuNDMuMzEtMy41Mmw1LjY1LTQyLjEySDU4OS42NmwtNC40OCwzNC4wN3EtLjgyLDYuNDItMS4yNSwxMC44dC0uNDMsNi4yMnEwLDEyLjgzLDYuOTIsMTkuMnQyMSw2LjM2YTQyLjIsNDIuMiwwLDAsMCwxNS42My0yLjU5LDI2LjYzLDI2LjYzLDAsMCwwLDExLTguMDUsMzAsMzAsMCwwLDAsNC44MS04Ljc5cTEuNzUtNSwzLjEzLTE1LjNsNS41LTQxLjkySDYzNi4wNlptLTE2Ny4zOC0zNy0zOC42LDc0LjU3aDE3LjQybDgtMTZoMjguMzdsMy4xNiwxNmgxNi41NWwtMTcuOTItNzQuNTdabS03LjA3LDQ2LjMsMTMuODYtMzAsNS41NCwzMFpNOTguMjMsMzMxLjA5aDE1LjY0bDkuNzgtNzQuNTdIMTA4Wm0yMDguNTUtNzYuMzVhNDQuMDYsNDQuMDYsMCwwLDAtMTcuNiwzLjQ5LDM5LjczLDM5LjczLDAsMCwwLTE0LDEwLjA2LDQ0LjExLDQ0LjExLDAsMCwwLTEwLjk1LDI5cTAsMTYuMjUsMTAuMDksMjZ0MjYuODQsOS43OGE0NCw0NCwwLDAsMCwxOC4wOC0zLjY5LDQwLjkxLDQwLjkxLDAsMCwwLDE0LjQ2LTEwLjgyLDM5Ljg5LDM5Ljg5LDAsMCwwLDcuNDctMTNBNDYuNzcsNDYuNzcsMCwwLDAsMzQzLjcxLDI5MHEwLTE1LjkzLTEwLjA5LTI1LjU5VDMwNi43OCwyNTQuNzRabTEzLjU3LDU2LjUzYTIzLjY0LDIzLjY0LDAsMCwxLTE4LjQxLDguMjZxLTkuOTMsMC0xNS44Ni02LjE0dC01Ljk0LTE2LjUzcTAtMTIuMzMsNy4zNC0yMC40NWEyMy43NiwyMy43NiwwLDAsMSwxOC40NC04LjEycTEwLDAsMTUuODksNi4wOHQ1LjksMTYuNDNRMzI3LjcxLDMwMywzMjAuMzUsMzExLjI3Wk0xNTIuMjcsMjY5LjY2YTEwLjQ1LDEwLjQ1LDAsMCwxLDcuMTYtMi41LDEyLjMxLDEyLjMxLDAsMCwxLDYuNzIsMS44NCwxNC4yNSwxNC4yNSwwLDAsMSw0Ljg5LDUuNTVsOC0xMC4zNGEyMi4xNywyMi4xNywwLDAsMC04LjQtNy4xLDI1Ljg4LDI1Ljg4LDAsMCwwLTExLjMxLTIuMzdxLTEwLjU0LDAtMTcuNDcsNi40NGEyMi4xNCwyMi4xNCwwLDAsMC01LjczLDIzLjI4LDE4LDE4LDAsMCwwLDMuNDksNS45M3EzLjE1LDMuNTEsMTIuMzIsOC41MWwyLjQsMS4zMmExNC4wOCwxNC4wOCwwLDAsMSw0Ljk0LDQuMjMsOS41MSw5LjUxLDAsMCwxLDEuNjMsNS40NSw5Ljc4LDkuNzgsMCwwLDEtMi44Myw3LjQzYy0xLjg4LDEuODEtNC40OSwyLjctNy44MiwyLjdhMTQuODUsMTQuODUsMCwwLDEtOC4xNS0yLjE5LDE4LjkzLDE4LjkzLDAsMCwxLTYuMTEtNi43N2wtOC40NSwxMC42NWEyOC40MiwyOC40MiwwLDAsMCw5Ljg4LDguNTUsMjcuNjEsMjcuNjEsMCwwLDAsMTIuNjMsMi44cTExLjY2LDAsMTguNzItNi40MXQ3LjA1LTE2Ljg2cTAtNy40OS0zLTEyLjIzdC0xMS40MS05LjY3Yy0uNjEtLjM4LTEuNTEtLjktMi43LTEuNThxLTkuMjctNS4yNS05LjI3LTEwLjI5QTguMTMsOC4xMywwLDAsMSwxNTIuMjcsMjY5LjY2Wk00MDIuNzIsMjg1LjVIMzcyLjI2bDMuODctMjlIMzYwLjQ5bC05LjgzLDc0LjU3aDE1LjY5bDQuMjgtMzIuMzVINDAxbC00LjI3LDMyLjM1aDE1LjYzbDkuNzgtNzQuNTdINDA2LjU5Wk01My44NSwzMDUuMTFINzEuNTJBMjEuMzYsMjEuMzYsMCwwLDEsNjQsMzE1LjczYTE5LjkxLDE5LjkxLDAsMCwxLTEyLjEsMy44cS0xMCwwLTE2LTYuMTJ0LTYtMTYuNDVxMC0xMi41Miw3LjMxLTIwLjc1QTIzLjYsMjMuNiwwLDAsMSw1NS42MywyNjhhMjEuMzUsMjEuMzUsMCwwLDEsMTEsMi45LDIzLjMzLDIzLjMzLDAsMCwxLDguMiw4LjM2TDg3LDI3MC41OGEzMC44MywzMC44MywwLDAsMC0xMi41My0xMS44MnEtNy43NC0zLjkyLTE4LjU5LTMuOTJhNDUuMDgsNDUuMDgsMCwwLDAtMTcuNDcsMy4yOCwzNS4yNCwzNS4yNCwwLDAsMC0xMy4yOSw5LjU1LDQ1LjE5LDQ1LjE5LDAsMCwwLTExLDI5LjQ5cTAsMTYuNDEsMTAuMDYsMjYuMTZ0MjcsOS43NXExNy4wNiwwLDI3LjA5LTEwLjcydDExLjIxLTMwLjI4SDU1LjUzWm0xODQtMTkuNjFIMjA3LjQzbDMuODgtMjlIMTk1LjY3bC05LjgzLDc0LjU3aDE1LjY5bDQuMjctMzIuMzVoMzAuMzZsLTQuMjgsMzIuMzVoMTUuNjRsOS43OC03NC41N0gyNDEuNzZaIi8+PC9nPjwvc3ZnPg==" />
          </div>
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = {
  getHtml,
};
