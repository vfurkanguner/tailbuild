export const initialHTML = (markup: string) =>
  `
<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <!--  DON'T FORGET TO SETUP TAILWIND FROM OFFICIAL DOC -->
      <script src="https://cdn.tailwindcss.com"></script>
      <style type="text/tailwindcss">
        @layer base {
          html {
            @apply dark:bg-slate-900 bg-white;
          }
        }
      </style>
      <!--REMOVE THIS BLOCK: DON'T FORGET TO SETUP TAILWIND FROM DOC. -->
    </head>
    <body class="container mx-auto">
      ${markup}
    </body>
  </html>
`;

export const initialHTMLForFrame = `
<!DOCTYPE html>
  <html >
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
            tailwind.config = {
            darkMode: 'class',
            }
        </script>
    </head>
    <body>
    <div />
    </body>
    </html>
`;
