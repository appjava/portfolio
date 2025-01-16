import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, a as renderComponent, e as renderSlot, f as createAstro, s as spreadAttributes } from './astro/server_BChaClSy.mjs';
import 'kleur/colors';
import 'html-escaper';
import './index(old).7b16503b_Cclk9YAX.mjs';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center items-center text-[12px] md:text-[15px] lg:text-[18px] mt-[12px]"> <nav class="flex flex-row gap-x-6 opacity-80"> <a href="#top">Inicio</a> <a href="#experience">Experiencia</a> <a href="#projects">Proyectos</a> <a href="#skills">Destrezas</a> </nav> </header>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-right rounded-lg shadow m-12 bg-black/20 backdrop-blur-lg w-full sm:w-[600px] md:w-[720px] lg:w-[900px] mx-auto"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex items-center justify-between"> <ul class="flex flex-wrap items-center text-sm font-small text-gray-500 sm:mt-0"> <li> <a href="#top" class="hover:underline me-3 md:me-6">Inicio</a> </li> <li> <a href="#experience" class="hover:underline me-3 md:me-6">Experiencia</a> </li> <li> <a href="#projects" class="hover:underline me-3 md:me-6">Proyectos</a> </li> <li> <a href="#skills" class="hover:underline me-3 md:me-6">Destrezas</a> </li> </ul> <span class=" text-sm text-center text-yellow-200">© 2025 <a href="#top" class="hover:underline">appjavadev</a> </span> </div> </footer>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/components/Footer.astro", void 0);

const $$Astro$y = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="projects/profile.jpg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="absolute top-0 z-[-2] lg:h-[600px] sm:h-[120px] h-[780px] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/layouts/Layout.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/components/Badge.astro", void 0);

const $$Astro$x = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${className} w-[240px] sm:w-[480px] md:w-[600px] lg:w-[800px] mx-auto py-12 pb-3`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/components/SectionContainer.astro", void 0);

const $$Astro$w = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/GitHub.astro", void 0);

const $$Astro$v = createAstro();
const $$Linkedln = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Linkedln;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Linkedln.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Mail.astro", void 0);

const $$Astro$u = createAstro();
const $$Mastodon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Mastodon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="16" height="16" fill="currentColor" class="bi bi-mastodon" viewBox="0 0 16 16"><path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Mastodon.astro", void 0);

const $$Astro$t = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-full border border-white/10 flex justify-center items-center
    gap-x-2 py-1 px-2 lg:py-2 lg:px-4 text-xs lg:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"${spreadAttributes(Astro2.props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/components/SocialPill.astro", void 0);

const $$Astro$s = createAstro();
const $$Js = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Js;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path> <path d="M7.5 8h3v8l-2 -1"></path> <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Js.astro", void 0);

const $$Astro$r = createAstro();
const $$Html = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path> <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Html.astro", void 0);

const $$Astro$q = createAstro();
const $$Css = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Css.astro", void 0);

const $$Astro$p = createAstro();
const $$Node = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Node;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Node.astro", void 0);

const $$Astro$o = createAstro();
const $$AstroIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$AstroIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14.972 3.483c.163 .196 .247 .46 .413 .987l3.64 11.53a15.5 15.5 0 0 0 -4.352 -1.42l-2.37 -7.723a.31 .31 0 0 0 -.296 -.213a.31 .31 0 0 0 -.295 .214l-2.342 7.718a15.5 15.5 0 0 0 -4.37 1.422l3.657 -11.53c.168 -.527 .251 -.79 .415 -.986c.144 -.172 .331 -.306 .544 -.388c.242 -.094 .527 -.094 1.099 -.094h2.612c.572 0 .858 0 1.1 .094c.213 .082 .4 .217 .545 .39"></path><path d="M9 18c0 1.5 2 3 3 4c1 -1 3 -3 3 -4q -3 1.5 -6 0"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/AstroIcon.astro", void 0);

const $$Astro$n = createAstro();
const $$Python = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Python;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"></path><path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"></path><path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"></path><path d="M11 6l0 .01"></path><path d="M13 18l0 .01"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Python.astro", void 0);

const $$Astro$m = createAstro();
const $$Tail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Tail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Tail.astro", void 0);

const $$Astro$l = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/React.astro", void 0);

const $$Astro$k = createAstro();
const $$Boot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Boot;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2"></path><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Boot.astro", void 0);

const $$Astro$j = createAstro();
const $$Django = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Django;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path><path d="M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201"></path><path d="M16 7v.01"></path><path d="M16 10v5.586c0 .905 -.36 1.774 -1 2.414"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Django.astro", void 0);

const $$Astro$i = createAstro();
const $$Arduino = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Arduino;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 128 128"><g fill="#ffffff" fill-rule="evenodd"> <path d="M.3 66.5v-9.6c.2-.1.2-.3.2-.5 3-13.1 11.2-21 24.2-24.1 1.1-.3 2.3-.2 3.4-.6h6.4c.1.2.4.1.6.1 6.4.7 12.2 3 17.3 7 4.4 3.3 7.8 7.5 10.9 12 .4.6.6.6 1 0 1.8-2.6 3.7-5.1 5.9-7.4 5.3-5.7 11.7-9.7 19.5-11.1 1.1-.3 2.4-.2 3.5-.6h6.2c.1.2.3.1.5.1 1.9.2 3.7.6 5.5 1.1 13.4 3.9 22.9 16.2 22.1 30.1-.6 11.7-6.5 20.1-16.8 25.4-5.1 2.8-10.7 3.5-16.5 3.4-7.6-.1-14.2-2.7-19.9-7.7-4-3.5-7.1-7.7-10-12.1-.4-.6-.6-.5-1 .1-1.8 2.7-3.7 5.4-5.9 8-3.9 4.4-8.4 8-14 9.9-6.9 2.4-13.9 2.5-20.9.6-10.1-2.9-17-9.3-20.8-19.1-.6-1.6-.9-3.4-1.4-5zm31.8 14.7c5.7.2 10.6-1.7 14.8-5.6 4.3-4 7.4-9 10.5-13.9.1-.3.1-.5-.1-.8-2.6-4.1-5.3-8.2-8.9-11.6-6.9-6.6-15-8.8-24.1-5.9-7.5 2.5-12.3 7.8-13.4 15.8-1.1 7.5 1.8 13.5 7.8 18 4 2.9 8.5 4.1 13.4 4zm63.4 0c2.2 0 4.4-.1 6.5-.7 7.9-2.4 13.1-7.3 14.6-15.5 1.5-8.1-1.6-14.6-8.4-19.2-7.5-5.2-18.4-4.7-26 1-5.1 3.8-8.5 8.9-11.9 14.2-.2.3-.1.5 0 .8 2.7 4.3 5.4 8.6 8.9 12.3 4.4 4.7 9.7 7.4 16.3 7.1zm0 0"></path><path d="M32 58.5c3.2 0 6.5.1 9.7 0 .8 0 .9.2.9 1-.1.9-.1 1.8 0 2.7.1.8-.1 1-1 1H28.8c-2.2 0-4.4-.1-6.6 0-.7 0-.9-.2-.9-1 .1-.9.1-1.8 0-2.8 0-.7.2-.9.9-.9 3.2.1 6.5 0 9.8 0zm63-6.4c.8 0 1.6.1 2.3 0 .5 0 .7.2.7.7-.1 1.4 0 2.8-.1 4.2 0 .7.2.9.9.9 1.3-.1 2.7 0 4.1-.1.6 0 .8.1.8.8v4.6c0 .5-.2.7-.7.7-1.4-.1-2.8 0-4.3-.1-.6 0-.8.2-.8.8.1 1.4 0 2.8.1 4.2 0 .6-.2.9-.8.9-1.5-.1-3-.1-4.5 0-.6 0-.8-.2-.8-.8.1-1.5 0-2.9.1-4.4 0-.5-.2-.7-.7-.7-1.4.1-2.8 0-4.2.1-.8 0-.9-.3-.9-.9 0-1.4.1-2.8 0-4.2-.1-.8.3-1 1-1 1.4.1 2.7 0 4.1.1.5 0 .7-.2.7-.7-.1-1.4 0-2.9-.1-4.3 0-.6.2-.8.8-.8.8.1 1.5 0 2.3 0zm29.852-27.623c-.133.199-.18.265-.223.332-.242.363-.055 1.097-.664 1.086-.54-.012-.403-.684-.594-1.051-.05-.098-.11-.188-.277-.461 0 .504.008.789 0 1.078-.008.195.035.441-.274.457-.312.016-.293-.234-.297-.43-.007-.68-.007-1.355-.003-2.031 0-.23-.036-.496.324-.504.27-.004.504-.015.617.336.144.43.195.91.527 1.324.317-.402.371-.867.492-1.293.102-.347.317-.37.598-.37.356.003.34.253.344.488.004.68.004 1.355-.004 2.035-.004.191.023.445-.281.449-.305 0-.282-.242-.285-.442-.008-.289 0-.574 0-1.003zm-3.712-1.532c.087 0 .18-.015.262 0 .325.063.828-.187.934.2.144.543-.426.27-.668.386-.242.117-.195.332-.2.528-.011.468-.007.937-.007 1.406 0 .258-.05.473-.383.46-.305-.01-.293-.234-.293-.437a36.975 36.975 0 01-.004-1.316c.012-.375.016-.727-.523-.676-.188.016-.352-.039-.352-.277 0-.328.254-.262.442-.27.265-.012.527-.004.793-.004zm0 0"></path></g> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Arduino.astro", void 0);

const $$Astro$h = createAstro();
const $$Esphome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Esphome;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#ffffff" viewBox="0 0 24 24" role="img"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M7.253 2.755c-.676 0-1.231.555-1.231 1.232v.976h-.083a.722.722 0 0 0-.717.716v11.682H.71v-.57h3.544a.355.355 0 0 0 .354-.354v-1.279a.355.355 0 0 0-.354-.355H.709v-.565h3.544a.355.355 0 0 0 .354-.355v-1.278a.355.355 0 0 0-.354-.355H.709v-.569h3.544a.355.355 0 0 0 .354-.355V10.05a.355.355 0 0 0-.354-.354H.709V6.113a.355.355 0 0 0-.355-.355.355.355 0 0 0-.354.355v3.937a.355.355 0 0 0 .354.355h3.544v.566H.354a.355.355 0 0 0-.354.355v1.279a.355.355 0 0 0 .354.354h3.544v.57H.354a.355.355 0 0 0-.354.354v1.275a.355.355 0 0 0 .354.355h3.544v.57H.354a.355.355 0 0 0-.354.354v1.278a.355.355 0 0 0 .354.355h4.868v.086c0 .389.323.716.717.716h.083v1.14c0 .677.555 1.233 1.231 1.233.677 0 1.233-.556 1.233-1.232v-1.14h.477v1.137c0 .676.556 1.232 1.232 1.232.677 0 1.232-.556 1.232-1.232v-1.138h.481v1.138c0 .676.556 1.232 1.232 1.232.676 0 1.233-.556 1.233-1.232v-1.138h.48v1.138c0 .676.556 1.232 1.232 1.232.677 0 1.232-.556 1.232-1.232v-1.138h.481v1.138c0 .676.556 1.232 1.232 1.232.676 0 1.233-.556 1.233-1.232v-1.138h.477v1.138c0 .676.555 1.232 1.231 1.232.677 0 1.233-.556 1.233-1.232v-1.138h.079c.39 0 .717-.323.717-.716V5.679a.723.723 0 0 0-.714-.716h-.082v-.979c0-.676-.556-1.231-1.232-1.23h-.001a1.238 1.238 0 0 0-1.231 1.233v.976h-.477v-.98c0-.675-.557-1.23-1.233-1.228h-.001c-.676 0-1.23.556-1.23 1.232v.976h-.482v-.976c0-.677-.555-1.232-1.232-1.232-.676 0-1.232.555-1.232 1.232v.976h-.48v-.976c0-.677-.557-1.232-1.233-1.232s-1.232.555-1.232 1.232v.976h-.48v-.976c0-.677-.556-1.232-1.233-1.232-.676 0-1.232.555-1.232 1.232v.976h-.477v-.976c0-.677-.556-1.232-1.233-1.232zm0 .715a.51.51 0 0 1 .517.517v.976H6.737v-.976a.51.51 0 0 1 .516-.517zm2.942 0a.51.51 0 0 1 .517.517v.976H9.679v-.976a.51.51 0 0 1 .516-.517zm2.945 0a.51.51 0 0 1 .516.517v.976h-1.032v-.976a.51.51 0 0 1 .516-.517zm2.945 0a.51.51 0 0 1 .517.517v.976h-1.033v-.976a.51.51 0 0 1 .516-.517zm2.945 0h.001a.507.507 0 0 1 .515.513v.98h-1.032v-.976a.51.51 0 0 1 .516-.517zm2.942.001h.001a.507.507 0 0 1 .515.513v.979h-1.032v-.976a.51.51 0 0 1 .516-.516zM6.018 5.758h17.186v12.319H6.018zm8.63 2.777a.322.322 0 0 0-.234.095l-3.776 3.78a.322.322 0 0 0 .228.55h.62v2.225a.322.322 0 0 0 .323.322h5.67a.322.322 0 0 0 .322-.322V12.96h.621a.322.322 0 0 0 .228-.55l-.856-.859v-1.533a.322.322 0 0 0-.322-.323h-.591a.322.322 0 0 0-.323.323v.3L14.87 8.63a.322.322 0 0 0-.221-.095zm-7.91 10.337H7.77v1.14a.51.51 0 0 1-.517.517.51.51 0 0 1-.516-.516zm2.94 0h1.034v1.138a.51.51 0 0 1-.517.516.51.51 0 0 1-.516-.516zm2.946 0h1.032v1.138a.51.51 0 0 1-.516.516.51.51 0 0 1-.516-.516zm2.945 0h1.033v1.138a.51.51 0 0 1-.517.516.51.51 0 0 1-.516-.516zm2.945 0h1.032v1.138a.51.51 0 0 1-.516.516.51.51 0 0 1-.516-.516zm2.941 0h1.033v1.138a.51.51 0 0 1-.517.516.51.51 0 0 1-.516-.516z"></path></g> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Esphome.astro", void 0);

const $$Astro$g = createAstro();
const $$Esp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Esp;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#ffffff" viewBox="0 0 24 24" role="img"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M12.926 19.324a7.6 7.6 0 0 0-2.983-6.754 7.44 7.44 0 0 0-3.828-1.554.697.697 0 0 1-.606-.731.674.674 0 0 1 .743-.617 8.97 8.97 0 0 1 8 9.805 7.828 7.828 0 0 1-.298 1.542l1.989.56a11.039 11.039 0 0 0 1.714-.651 12.159 12.159 0 0 0 .217-2.343A12.57 12.57 0 0 0 7.212 6.171a5.53 5.53 0 0 0-2 0 4.354 4.354 0 0 0-2.16 1.337 4.274 4.274 0 0 0 1.909 6.856 9.896 9.896 0 0 0 1.074.195 4.011 4.011 0 0 1 3.337 3.954 3.965 3.965 0 0 1-.64 2.16l1.371.88a10.182 10.182 0 0 0 2.057.342 7.52 7.52 0 0 0 .754-2.628m.16 4.73A13.073 13.073 0 0 1 .001 10.983 12.982 12.982 0 0 1 3.83 1.737l.743.697a12.067 12.067 0 0 0 0 17.141 12.067 12.067 0 0 0 17.141 0l.697.697a12.97 12.97 0 0 1-9.336 3.726M24 10.993A10.993 10.993 0 0 0 12.949 0c-.389 0-.766 0-1.143.057l-.252.732a18.912 18.912 0 0 1 11.588 11.576l.731-.263c0-.366.069-.732.069-1.143m-1.269 5.165A17.53 17.53 0 0 0 7.818 1.27a11.119 11.119 0 0 0-2.457 1.77v1.635A13.919 13.919 0 0 1 19.268 18.57h1.634a11.713 11.713 0 0 0 1.771-2.446M7.92 17.884a1.691 1.691 0 1 1-1.69-1.691 1.691 1.691 0 0 1 1.69 1.691"></path> </g> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Esp.astro", void 0);

const $$Astro$f = createAstro();
const $$Micro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Micro;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="10" height="10" viewBox="0 0 24 24"><path fill="currentColor" d="M0 0h11.509v18.737h.982V0H24v24h-5.263V5.263h-.983V24H6.246V5.263l-.983.035V24H0zm22.246 19.509h-1.404v2.386h1.404z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Micro.astro", void 0);

const $$Astro$e = createAstro();
const $$Blender = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Blender;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 14m-6 0a6 5 0 1 0 12 0a6 5 0 1 0 -12 0"></path><path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M3 16l9 -6.5"></path><path d="M6 9h9"></path><path d="M13 5l5.65 5"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Blender.astro", void 0);

const $$Astro$d = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Experience;
  const EXPERIENCIE = [
    {
      date: "Actualmente",
      title: "Creando aplicaciones web y prototipos del Internet de las cosas (IoT) para gestion de energ\xEDa renovable.",
      description: "Dom\xF3tica para el sector residencial y la agroindustria",
      link: "#projects",
      tags: ["Arduino", "ESP32", "MicroPython", "ESP8266", "ESP01"],
      Icons: [$$Arduino, $$Esphome, $$Micro, $$Python, $$Esp, $$Blender, $$Django]
    },
    {
      date: "Abril 2023",
      title: "Tienda Virtual - PlantaZula",
      description: "Muestra y venta de productos verdes, plantas y artesan\xEDas",
      link: "https://plantazula.pages.dev",
      tags: ["LocalStorage", "Cart", "Form"],
      Icons: [$$Html, $$Css, $$Js, $$Node]
    },
    {
      date: "Junio 2022",
      title: "P\xE1gina de Presentaci\xF3n - EchoGroup",
      description: "Lanzamiento proyecto EchoGroup",
      link: "https://echogroup.pages.dev",
      tags: ["Transitions", "Internationalize"],
      Icons: [$$React, $$Tail]
    },
    {
      date: "Enero 2022",
      title: "Portafolio Servicios de Ingenier\xEDa - IngJAVA",
      description: "Curriculum Vitae de proyectos de Ingenier\xEDa Hidromec\xE1nica",
      link: "https://ingjava.web.app",
      tags: ["Engineering", "Simulation", "CAE"],
      Icons: [$$AstroIcon, $$Boot]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 ml-3"> ${EXPERIENCIE.map(({ date, title, description, link }) => renderTemplate`<li class="mb-10 ms-4"> <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-sky-100/80">${date}</time> <a${addAttribute(link, "href")} target="_blank"><h3 class="text-lg font-semibold text-yellow-200 mt-3">${title}</h3></a> <p class="mb-4 text-base font-normal text-gray-200 text-pretty">${description}</p> <a${addAttribute(link, "href")} target="_blank">${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Ver más` })}</a> </li>`)} </ol>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/components/Experience.astro", void 0);

const $$Astro$c = createAstro();
const $$Git = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 128 128"> <path fill="#ffffff" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Git.astro", void 0);

const $$Astro$b = createAstro();
const $$Electron = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Electron;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#ffffff" viewBox="-1 0 24 24" stroke-width="3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="m7.827 5.156c-.6-.127-1.288-.2-1.994-.2-.752 0-1.486.083-2.191.24l.067-.012c-1.056.208-1.935.838-2.471 1.702l-.009.016c-.289.486-.46 1.071-.46 1.696 0 .176.014.349.04.518l-.002-.019c.14.968.462 1.837.931 2.608l-.017-.03c.032.05.073.091.121.121l.002.001c.047.026.103.041.162.041h.016-.001c.081-.003.154-.039.205-.095.057-.051.093-.123.095-.204 0-.002 0-.003 0-.005 0-.032-.005-.063-.014-.092l.001.002c-.008-.02-.013-.043-.014-.068-.41-.657-.707-1.429-.841-2.255l-.005-.036c-.023-.137-.037-.295-.037-.456 0-.514.136-.996.374-1.412l-.007.014c.494-.75 1.269-1.28 2.172-1.443l.02-.003c.56-.122 1.202-.192 1.861-.192s1.302.07 1.921.203l-.06-.011h.004c.014 0 .027.005.037.014l.014.014h.006c.089 0 .168-.036.226-.095.059-.058.095-.139.095-.228 0-.002 0-.003 0-.004 0-.005 0-.011 0-.017 0-.076-.026-.146-.069-.202l.001.001c-.045-.053-.106-.091-.175-.108h-.002zm-4.473 8.727c.683.719 1.404 1.383 2.166 1.999l.042.033c.726.587 1.536 1.15 2.386 1.653l.094.052c.983.57 2.135 1.112 3.335 1.557l.159.052c.946.362 2.061.661 3.214.846l.099.013c.491.083 1.056.13 1.632.13.44 0 .873-.028 1.298-.081l-.051.005c.83-.095 1.579-.372 2.229-.79l-.021.012c.036-.036.067-.076.094-.12l.002-.003c.026-.042.041-.093.041-.147 0-.001 0-.002 0-.002 0-.001 0-.003 0-.004 0-.089-.036-.17-.095-.228-.058-.059-.139-.095-.228-.095-.002 0-.003 0-.004 0-.03.004-.057.013-.081.028l.001-.001c-.031.015-.057.033-.08.055-.585.373-1.283.622-2.032.694l-.019.001c-.319.037-.689.058-1.063.058-.578 0-1.145-.05-1.695-.146l.059.008c-1.181-.198-2.226-.482-3.227-.857l.118.039c-1.251-.457-2.321-.977-3.329-1.588l.084.047c-.952-.547-1.767-1.102-2.537-1.712l.042.032c-.784-.62-1.484-1.268-2.13-1.966l-.011-.012c-.034-.034-.075-.061-.12-.079l-.002-.001c-.036-.016-.078-.026-.122-.027h-.001c-.001 0-.003 0-.004 0-.089 0-.17.036-.228.095-.059.058-.095.139-.095.228v.004c0 .04.01.077.028.11l-.001-.001zm15.792-.409c.902-.98 1.602-2.16 2.027-3.465l.019-.067c.13-.365.205-.787.205-1.226 0-.655-.167-1.271-.46-1.808l.01.02c-.384-.649-.956-1.151-1.641-1.437l-.023-.008c-.773-.328-1.672-.518-2.615-.518-.011 0-.022 0-.032 0h.002c-.003 0-.007 0-.011 0-.083 0-.157.037-.207.095-.05.059-.08.137-.08.221v.012-.001.011c0 .084.03.161.081.221v-.001c.05.059.124.095.207.095h.012-.001c.05-.002.11-.002.169-.002.784 0 1.533.156 2.215.439l-.038-.014c.594.246 1.079.656 1.411 1.174l.007.012c.221.432.351.943.351 1.483 0 .407-.074.797-.208 1.158l.007-.023c-.414 1.247-1.053 2.32-1.874 3.223l.006-.007-.054.109c-.017.032-.027.069-.027.109v.004c0 .089.036.17.095.228.058.059.139.095.228.095h.004.008c.048 0 .092-.015.129-.041h-.001c.032-.024.067-.047.105-.066l.004-.002zm-5.264-8.208c-1.193.283-2.213.615-3.194 1.019l.14-.051c-1.082.44-1.988.893-2.854 1.405l.1-.055c-1.192.689-2.223 1.424-3.176 2.245l.027-.022c-.876.747-1.654 1.56-2.345 2.443l-.028.037c-.573.725-1.056 1.558-1.409 2.456l-.023.066c-.214.519-.339 1.123-.339 1.755 0 .209.014.415.04.616l-.003-.024c.019.075.057.14.109.191.053.05.124.08.203.08h.017-.001.006c.089 0 .169-.036.227-.094.059-.058.095-.139.095-.228 0-.002 0-.003 0-.004v-.054c-.016-.139-.025-.301-.025-.465 0-.595.121-1.162.341-1.677l-.011.028c.357-.897.815-1.672 1.373-2.363l-.013.017c.695-.868 1.446-1.636 2.266-2.325l.025-.02c.899-.762 1.897-1.469 2.955-2.086l.099-.054c.714-.43 1.556-.855 2.429-1.22l.131-.048c.782-.333 1.728-.646 2.702-.886l.134-.028c.115-.022.216-.07.3-.139l-.001.001c.05-.053.08-.124.08-.203 0-.006 0-.011 0-.017v.001c-.003-.081-.039-.154-.095-.205-.051-.057-.123-.093-.204-.095h-.08zm-7.609 13.876c.461 1.38 1.169 2.567 2.08 3.567l-.007-.008c.668.769 1.637 1.262 2.722 1.295h.006c.783-.008 1.504-.273 2.081-.715l-.008.006c.708-.537 1.292-1.198 1.729-1.954l.017-.032c.014-.026.028-.058.039-.09l.002-.005c.009-.027.014-.058.014-.09 0-.002 0-.004 0-.006 0-.001 0-.003 0-.004 0-.089-.036-.17-.095-.228-.058-.059-.139-.095-.228-.095-.001 0-.003 0-.004 0-.001 0-.001 0-.002 0-.054 0-.105.015-.149.042l.001-.001c-.05.032-.091.073-.121.121l-.001.002c-.405.704-.92 1.297-1.528 1.777l-.013.01c-.473.374-1.075.603-1.73.614h-.002c-.941-.046-1.77-.49-2.328-1.167l-.004-.006c-.802-.908-1.431-1.991-1.822-3.181l-.018-.065c-.039-.057-.084-.106-.135-.149l-.001-.001c-.05-.042-.115-.068-.186-.068-.002 0-.004 0-.005 0-.081.003-.154.039-.205.095-.059.058-.095.139-.095.228v.004.109zm9.818-.572c.252-.779.471-1.718.615-2.681l.012-.1c.139-.9.218-1.938.218-2.994 0-.012 0-.023 0-.035v.002-.16c0-.023 0-.049 0-.076 0-1.318-.119-2.608-.347-3.859l.02.131c-.218-1.244-.54-2.347-.967-3.396l.04.11c-.381-.959-.863-1.787-1.448-2.53l.016.021c-.476-.623-1.084-1.122-1.784-1.46l-.029-.013c-.017-.017-.04-.027-.066-.027-.001 0-.002 0-.002 0h-.068c-.003 0-.007 0-.011 0-.084 0-.161.03-.221.081h.001c-.059.05-.095.125-.095.207v.012-.001.008c0 .068.02.132.055.185l-.001-.001c.032.05.079.088.134.108l.002.001c.667.328 1.221.795 1.642 1.365l.009.012c.516.68.956 1.458 1.286 2.293l.023.066c.362.89.665 1.938.858 3.023l.014.097c.2 1.072.314 2.305.314 3.565v.08-.004.16.02c0 1.033-.079 2.047-.232 3.036l.014-.11c-.163 1.074-.391 2.021-.69 2.936l.036-.127.027-.08v.027.004c0 .089.036.17.095.228.058.059.139.095.228.095h.004.005c.071 0 .136-.026.187-.068.048-.037.085-.086.108-.142l.001-.002zm6.055-.328c0-.006 0-.013 0-.02 0-.415-.172-.79-.449-1.058-.273-.278-.652-.45-1.072-.45-.012 0-.023 0-.035 0h.002c-.006 0-.012 0-.019 0-.416 0-.791.173-1.058.45-.277.268-.45.643-.45 1.058v.021-.001.032c0 .42.172.8.45 1.072.268.278.643.451 1.059.451h.02-.001.033c.42 0 .799-.172 1.072-.45.277-.273.449-.652.449-1.071 0-.012 0-.025 0-.037v.002zm-.655 0v.02c0 .243-.099.462-.259.62-.158.16-.377.259-.62.259-.007 0-.014 0-.021 0h.001c-.001 0-.002 0-.003 0-.244 0-.464-.099-.624-.259-.168-.156-.273-.377-.273-.624 0-.006 0-.012 0-.017v.001c.001-.247.105-.47.272-.627.157-.168.38-.272.627-.273h.016c.246 0 .468.105.623.272l.001.001c.16.16.259.381.259.625v.002zm-19.937 1.559h.019c.415 0 .79-.172 1.058-.449.278-.273.451-.653.451-1.073 0-.011 0-.023 0-.034v.002c0-.006 0-.012 0-.019 0-.416-.173-.791-.45-1.058-.268-.277-.643-.45-1.058-.45-.007 0-.014 0-.021 0h.001c-.01 0-.021 0-.032 0-.42 0-.8.172-1.072.45-.277.268-.45.643-.45 1.058v.021-.001.032c0 .42.172.8.45 1.072.273.277.652.449 1.071.449h.035zm0-.655c-.006 0-.013 0-.02 0-.243 0-.462-.099-.62-.259-.16-.158-.259-.377-.259-.62 0-.007 0-.014 0-.021v.001c0-.001 0-.002 0-.003 0-.244.099-.464.259-.624.156-.168.377-.273.624-.273h.017-.001c.247.001.47.105.627.272.168.157.272.38.273.627v.016c0 .246-.105.468-.272.623l-.001.001c-.16.158-.379.255-.621.255-.002 0-.004 0-.006 0zm9.52-16.064h.033c.42 0 .799-.172 1.072-.45.278-.268.451-.643.451-1.059 0-.007 0-.013 0-.02v.001c0-.01 0-.021 0-.033 0-.42-.172-.799-.45-1.072-.273-.278-.652-.45-1.072-.45-.012 0-.023 0-.035 0h.002c-.006 0-.012 0-.019 0-.416 0-.791.173-1.058.45-.278.273-.45.652-.45 1.072v.035-.002.019c0 .416.173.791.45 1.058.268.277.643.45 1.058.45h.017-.001zm0-.654c-.002 0-.005 0-.007 0-.238 0-.453-.099-.606-.259-.16-.153-.259-.368-.259-.606 0-.003 0-.005 0-.008 0-.006 0-.013 0-.02 0-.243.099-.462.259-.62.153-.16.368-.259.606-.259h.008.02c.243 0 .462.099.62.259.16.158.259.377.259.62v.021-.001.007c0 .238-.099.453-.259.606-.158.161-.378.26-.621.26-.007 0-.014 0-.02 0h.001zm.246 11.264c-.035.017-.075.027-.118.027-.001 0-.003 0-.004 0h-.125c-.005 0-.011 0-.018 0-.303 0-.577-.125-.773-.327-.202-.196-.327-.47-.327-.774 0-.006 0-.012 0-.019v.001c0-.007 0-.015 0-.023 0-.298.126-.566.327-.754l.001-.001c.198-.194.47-.314.77-.314h.022-.001.021c.262 0 .502.093.69.247l-.002-.001c.188.148.323.355.38.593l.001.007v.011c0 .044.005.087.014.129l-.001-.004c.009.033.014.07.014.109v.021c0 .262-.093.502-.247.69l.001-.002c-.155.192-.371.33-.619.382l-.007.001z"></path></g> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Electron.astro", void 0);

const $$Astro$a = createAstro();
const $$Figma = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Figma;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"></path><path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Figma.astro", void 0);

const $$Astro$9 = createAstro();
const $$Mx = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Mx;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#ffffff" viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path d="M16 17.735l4.369 5.093-1 1.199-2.843-3.36-1.505-1.787zM32 3.213v25.579c0 0.869-0.708 1.577-1.584 1.577h-28.832c-0.876 0-1.584-0.708-1.584-1.583v-25.573c0-0.875 0.708-1.583 1.584-1.583h28.832c0.876 0 1.584 0.708 1.584 1.583zM29.011 26l-2.817-3.391-2.824-3.385-0.781 0.937-4.333-5.052 6.552-7.64-1.567-1.344-6.344 7.401-6.328-7.371-2.595 2.224 6.667 7.771-0.973 1.136-1.651-1.953-9.027 10.667z"></path> </g> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Mx.astro", void 0);

const $$Astro$8 = createAstro();
const $$Java = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Java;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#ffffff" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Java.astro", void 0);

const $$Astro$7 = createAstro();
const $$Spring = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Spring;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#ffffff" viewBox="0 0 32 32"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path d="M29.094 1.661c-0.448 1.078-1.021 2.094-1.708 3.031-3.010-3.005-7.089-4.693-11.344-4.693-8.802 0-16.042 7.24-16.042 16.042 0 4.391 1.802 8.594 4.984 11.62l0.589 0.526c2.896 2.438 6.552 3.771 10.333 3.776 8.37 0 15.401-6.552 16-14.896 0.438-4.089-0.766-9.255-2.813-15.401zM7.26 27.755c-0.255 0.323-0.651 0.505-1.063 0.505-0.76 0-1.37-0.615-1.375-1.37 0-0.755 0.625-1.375 1.375-1.375 1.151 0.005 1.792 1.344 1.063 2.24zM29.031 22.953c-3.958 5.271-12.417 3.495-17.833 3.75 0 0-0.964 0.057-1.932 0.214 0 0 0.365-0.151 0.833-0.333 3.807-1.323 5.604-1.578 7.917-2.766 4.354-2.214 8.661-7.057 9.557-12.094-1.661 4.849-6.688 9.010-11.266 10.703-3.135 1.156-8.802 2.281-8.802 2.281l-0.229-0.12c-3.859-1.875-3.974-10.229 3.036-12.927 3.068-1.177 6.010-0.531 9.323-1.318 3.542-0.844 7.641-3.5 9.307-6.964 1.865 5.542 4.109 14.214 0.089 19.573z"></path> </g> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Spring.astro", void 0);

const $$Astro$6 = createAstro();
const $$Cplus = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Cplus;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 128 128"> <path fill="#ffffff" d="M63.443 0c-1.782 0-3.564.39-4.916 1.172L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.197c0 1.562.55 3.298 1.441 4.841l-.002.002c.89 1.543 2.123 2.89 3.475 3.672l46.931 27.094c2.703 1.562 7.13 1.562 9.832 0h.002l46.934-27.094c1.352-.78 2.582-2.129 3.473-3.672.89-1.543 1.441-3.28 1.441-4.843V36.779c0-1.557-.55-3.295-1.441-4.838v-.002c-.891-1.545-2.121-2.893-3.473-3.67L68.359 1.173C67.008.39 65.226 0 63.443 0zm.002 26.033c13.465 0 26.02 7.246 32.77 18.91l-16.38 9.479c-3.372-5.836-9.66-9.467-16.39-9.467-10.432 0-18.922 8.49-18.922 18.924S53.013 82.8 63.445 82.8c6.735 0 13.015-3.625 16.395-9.465l16.375 9.477c-6.746 11.662-19.305 18.91-32.77 18.91-20.867 0-37.843-16.977-37.843-37.844s16.976-37.844 37.843-37.844v-.002zM92.881 57.57h4.201v4.207h4.203v4.203h-4.203v4.207h-4.201V65.98h-4.207v-4.203h4.207V57.57zm15.765 0h4.208v4.207h4.203v4.203h-4.203v4.207h-4.208V65.98h-4.205v-4.203h4.205V57.57z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Cplus.astro", void 0);

const $$Astro$5 = createAstro();
const $$Type = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Type;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#ffffff" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 45 A 1.0001 1.0001 0 0 0 5 46 L 45 46 A 1.0001 1.0001 0 0 0 46 45 L 46 5 A 1.0001 1.0001 0 0 0 45 4 L 5 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 15 23 L 15 26.445312 L 20 26.445312 L 20 42 L 24 42 L 24 26.445312 L 29 26.445312 L 29 23 L 15 23 z M 36.691406 23.009766 C 33.576782 22.997369 30.017578 23.941219 30.017578 28.324219 C 30.017578 34.054219 37.738281 34.055625 37.738281 36.640625 C 37.738281 36.885625 37.842187 38.666016 35.117188 38.666016 C 32.392187 38.666016 30.121094 36.953125 30.121094 36.953125 L 30.121094 41.111328 C 30.121094 41.111328 42.001953 44.954062 42.001953 36.289062 C 42.000953 30.664063 34.208984 30.945391 34.208984 28.150391 C 34.208984 27.067391 34.978375 26.054687 37.109375 26.054688 C 39.240375 26.054688 41.126953 27.3125 41.126953 27.3125 L 41.267578 23.607422 C 41.267578 23.607422 39.113892 23.019408 36.691406 23.009766 z"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Type.astro", void 0);

const $$Astro$4 = createAstro();
const $$Assistant = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Assistant;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 1024 1024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <circle cx="512" cy="512" r="512" style="fill:#fff"></circle> <path d="m502.4 719-.4-.4.4.4H315.2c-5.8 0-10.4-4.7-10.4-10.4v-179H258c-6.9 0-12.5-5.6-12.5-12.5 0-3.3 1.3-6.5 3.6-8.8l251.7-254.7c6.1-6.2 16-6.2 22.2-.1l.1.1 131.5 132.3v-24.5c0-5.8 4.7-10.4 10.4-10.4h43.7c5.8 0 10.4 4.7 10.4 10.4v89.9l55.9 57c4.8 4.9 4.8 12.9-.2 17.7-2.3 2.3-5.5 3.6-8.8 3.6h-46.9v178.9c0 5.8-4.7 10.4-10.4 10.4H521.4l.2-.2-.2.2 39-38.9h36c2.8 7.8 10.2 13.4 19 13.4 11.1 0 20.2-9 20.2-20.1 0-11.1-9-20.1-20.2-20.1-8.8 0-16.3 5.6-19 13.4h-41.6l-36.2 36.2v-44.1l43.1-43.1h69.7c2.8 7.8 10.2 13.4 19 13.4 11.1 0 20.2-9 20.2-20.1 0-11.1-9-20.1-20.2-20.1-8.8 0-16.3 5.6-19 13.4h-56.2l40.3-40.2v-33.6l29-28.9c2.6 1.3 5.6 2 8.7 2 11.1 0 20.2-9 20.2-20.1 0-11.1-9-20.1-20.2-20.1-11.1 0-20.2 9-20.2 20.1 0 3.1.7 6.1 2 8.7l-19.5 19.4V448c7.8-2.8 13.5-10.2 13.5-19 0-11.1-9-20.1-20.2-20.1-11.1 0-20.2 9-20.2 20.1 0 8.8 5.6 16.2 13.5 19v61.5L582.6 490c1.3-2.6 2-5.6 2-8.7 0-11.1-9-20.1-20.2-20.1s-20.2 9-20.2 20.1c0 11.1 9 20.1 20.2 20.1 3.1 0 6.1-.7 8.7-2l29 28.9v28l-36.3 36.3V566c7.8-2.8 13.5-10.2 13.5-19 0-11.1-9-20.1-20.2-20.1-11.1 0-20.2 9-20.2 20.1 0 8.8 5.6 16.2 13.5 19v40l-33.6 33.6V442.4l27.6-27.6c2.6 1.3 5.6 2 8.7 2 11.1 0 20.2-9 20.2-20.1 0-11.1-9-20.1-20.2-20.1-11.1 0-20.2 9-20.2 20.1 0 3.1.7 6.1 2 8.7l-24.8 24.8-24.8-24.8c1.3-2.6 2-5.6 2-8.7 0-11.1-9-20.1-20.2-20.1-11.1 0-20.2 9-20.2 20.1 0 11.1 9 20.1 20.2 20.1 3.1 0 6.1-.7 8.7-2l27.6 27.6v140.8L457 534.9v-38.6c7.8-2.8 13.5-10.2 13.5-19 0-11.1-9-20.1-20.2-20.1-11.1 0-20.2 9-20.2 20.1 0 8.8 5.6 16.2 13.5 19v25.2l-37.7-37.6v-37.3c7.8-2.8 13.5-10.2 13.5-19 0-11.1-9-20.1-20.2-20.1-11.1 0-20.2 9-20.2 20.1 0 8.8 5.6 16.2 13.5 19v42.9l41.6 41.5h-23.9c-2.8-7.8-10.2-13.4-19-13.4-11.1 0-20.2 9-20.2 20.1s9 20.1 20.2 20.1c8.8 0 16.3-5.6 19-13.4h37.4l57.9 57.8v100.5l-30.9-30.9v-38.7c7.8-2.8 13.5-10.2 13.5-19 0-11.1-9-20.1-20.2-20.1-11.1 0-20.2 9-20.2 20.1 0 8.8 5.6 16.2 13.5 19v25.2l-45-44.9c1.3-2.6 2-5.6 2-8.7 0-11.1-9-20.1-20.2-20.1-11.1 0-20.2 9-20.2 20.1 0 11.1 9 20.1 20.2 20.1 3.1 0 6.1-.7 8.7-2l45 44.9h-23.9c-2.8-7.8-10.2-13.4-19-13.4-11.1 0-20.2 9-20.2 20.1 0 11.1 9 20.1 20.2 20.1 8.8 0 16.3-5.6 19-13.4h37.4l37.2 37.9M398.9 419.5c-4.5 0-8.1 3.6-8.1 8.1 0 4.4 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm51.1 49.7c-4.5 0-8.1 3.6-8.1 8.1 0 4.4 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm18.9-80.6c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.7-8.1-8.1-8.1zm184.3 100.7c4.5 0 8.1-3.6 8.1-8.1s-3.6-8.1-8.1-8.1-8.1 3.6-8.1 8.1 3.6 8.1 8.1 8.1zM555 404.7c4.5 0 8.1-3.6 8.1-8.1s-3.6-8.1-8.1-8.1-8.1 3.6-8.1 8.1 3.6 8.1 8.1 8.1zm9.4 68.5c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.7-8.1-8.1-8.1zm-173.6 56.4c-4.5 0-8.1 3.6-8.1 8.1 0 4.4 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm259.7 87.3c4.5 0 8.1-3.6 8.1-8.1s-3.6-8.1-8.1-8.1-8.1 3.6-8.1 8.1 3.6 8.1 8.1 8.1zm-41.7-196c-4.5 0-8.1 3.6-8.1 8.1 0 4.4 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1c-.1-4.5-3.7-8.1-8.1-8.1zM559 539c-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1 8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm-161.4 57.8c-4.5 0-8.1 3.6-8.1 8.1 0 4.4 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1c-.1-4.5-3.7-8.1-8.1-8.1zm10.7 69.8c-4.5 0-8.1 3.6-8.1 8.1 0 4.4 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1zm207.2 14.8c4.5 0 8.1-3.6 8.1-8.1 0-4.4-3.6-8.1-8.1-8.1s-8.1 3.6-8.1 8.1 3.6 8.1 8.1 8.1zm-148-75.2c-4.5 0-8.1 3.6-8.1 8.1 0 4.4 3.6 8.1 8.1 8.1s8.1-3.6 8.1-8.1-3.6-8.1-8.1-8.1z" style="fill:#121212"></path> </g> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Assistant.astro", void 0);

const $$Astro$3 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Skills;
  const SKILLS = [
    {
      title: "HTML",
      Icon: $$Html
    },
    {
      title: "CSS",
      Icon: $$Css
    },
    {
      title: "JS",
      Icon: $$Js
    },
    {
      title: "GIT",
      Icon: $$Git
    },
    {
      title: "NODE",
      Icon: $$Node
    },
    {
      title: "ELECTRON",
      Icon: $$Electron
    },
    {
      title: "TypeScript",
      Icon: $$Type
    },
    {
      title: "ASTRO",
      Icon: $$AstroIcon
    },
    {
      title: "REACT",
      Icon: $$React
    },
    {
      title: "TAILWIND",
      Icon: $$Tail
    },
    {
      title: "BOOTSTRAP",
      Icon: $$Boot
    },
    {
      title: "PYTHON",
      Icon: $$Python
    },
    {
      title: "DJANGO",
      Icon: $$Django
    },
    {
      title: "MICROPYTHON",
      Icon: $$Micro
    },
    {
      title: "ARDUINO",
      Icon: $$Arduino
    },
    {
      title: "ESPHOME",
      Icon: $$Esphome
    },
    {
      title: "C++",
      Icon: $$Cplus
    },
    {
      title: "Home Assistant",
      Icon: $$Assistant
    },
    {
      title: "FIGMA",
      Icon: $$Figma
    },
    {
      title: "BLENDER",
      Icon: $$Blender
    },
    {
      title: "Java",
      Icon: $$Java
    },
    {
      title: "Spring",
      Icon: $$Spring
    },
    {
      title: "MXLinux",
      Icon: $$Mx
    }
  ];
  return renderTemplate`${SKILLS.map(({ title, Icon }) => renderTemplate`${maybeRenderHead()}<div class="flex justify-center items-center hover:scale-110 hover:bg-white/1 transition">${renderComponent($$result, "Icon", Icon, { "class": "size-7 lg:size-9 " })}<p class="text-[12px] px-[3px] font-bold">${title}</p></div>`)}`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/components/Skills.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const PROJECTS = [
    {
      title: "Solar Personal App",
      description: "Aplicaci\xF3n web para dimensionamiento energ\xE9tico de sistemas fotovolt\xE1icos dom\xE9sticos.  ",
      link: "https://solarpersonal.web.app",
      github: "https://github.com/appjava",
      cover: "projects/SolarApp.webp",
      tags: ["Solar", "App", "Energy"]
    },
    {
      title: "EchoHome",
      description: "Blog personal sobre un estilo de vida ecol\xF3gicamente confortable",
      link: "https://echoprojects3d.web.app/",
      github: "https://github.com/appjava",
      cover: "projects/EchoHomeSpace.webp",
      tags: ["Domotic", "Ecology", "Sustainable"]
    }
  ];
  return renderTemplate`${PROJECTS.map(({ title, description, cover, link }) => renderTemplate`${maybeRenderHead()}<article class="mt-12"><h3 class="md:text-2xl text-2md font-semibold text-yellow-200 mb-2">${title}</h3><p class="md:text-xl text-md mb-4 text-pretty">${description}</p><ul><!--{tags.map(tag =>(
                    <li>{tag}</li>
                ))}--></ul><a${addAttribute(link, "href")} target="_blank"><img class="rounded-[12px] shadow-2xl shadow-white/15 w-full"${addAttribute(cover, "src")} alt="Project Screenshot {cover}"></a></article>`)}`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/components/Projects.astro", void 0);

const $$Astro$2 = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path> <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path> <path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Briefcase.astro", void 0);

const $$Astro$1 = createAstro();
const $$Pill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-pill"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M20.207 3.793a5.95 5.95 0 0 1 0 8.414l-8 8a5.95 5.95 0 0 1 -8.414 -8.414l8 -8a5.95 5.95 0 0 1 8.414 0m-7 1.414l-4.294 4.293l5.586 5.586l4.294 -4.292a3.95 3.95 0 1 0 -5.586 -5.586"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Pill.astro", void 0);

const $$Astro = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M7 8l-4 4l4 4"></path> <path d="M17 8l4 4l-4 4"></path> <path d="M14 4l-4 16"></path> </svg>`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Code.astro", void 0);

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img class="rounded-full size-20 md:size-20 lg:size-24 mb-4" src="projects/profile.jpg" alt="AppJaVaDev">`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/icons/Profile.astro", void 0);

export { $$SectionContainer as $, $$Profile as a, $$Badge as b, $$SocialPill as c, $$GitHub as d, $$Linkedln as e, $$Mastodon as f, $$Mail as g, $$Briefcase as h, $$Experience as i, $$Code as j, $$Projects as k, $$Pill as l, $$Skills as m, $$Layout as n };
