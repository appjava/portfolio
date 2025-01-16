/* empty css                                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BChaClSy.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$SectionContainer, a as $$Profile, b as $$Badge, c as $$SocialPill, d as $$GitHub, e as $$Linkedln, f as $$Mastodon, g as $$Mail, h as $$Briefcase, i as $$Experience, j as $$Code, k as $$Projects, l as $$Pill, m as $$Skills, n as $$Layout } from '../chunks/Profile_Dy24YSZY.mjs';
export { renderers } from '../renderers.mjs';

const $$Indexold = createComponent(($$result, $$props, $$slots) => {
  let meName = "appjavadev";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AppJaVaDev Portfolio | Web Development and Mechatronic Projects", "description": "Web Development and IoT Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-12"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "top" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Profile", $$Profile, {})} <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
Hola, soy
${meName} <a href="/" target="" rel="noopener" class="flex justify-center items-center"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible` })} </a> </h1> <h2 class="text-xl lg:text-2xl text-wrap max-w-[900px]">
Desarrollador Web, Programador y Creador de Prototipos Mecatrónicos. <span class="text-red-200/50">De Cali, Colombia.</span> <span class="opacity-60">Enfocado en ofrecer soluciones escalables y confiables, de manera eficiente y sostenible.</span> </h2> <nav class="flex gap-3 mt-6 flex-wrap"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://github.com/appjava" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "GitHubIcon", $$GitHub, { "class": "size-5" })} ` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedlnIcon", $$Linkedln, { "class": "size-5" })} ` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://mastodon.social/@appjavadev" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MastodonIcon", $$Mastodon, { "class": "size-5" })} ` })} ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "mailto:projects.appjavadev@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-5" })}
projects.appjavadev@gmail.com
` })} </nav> ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experience" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl font-bold mb-6 flex gap-x-3 items-center lg:mt-6"> ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-9 " })}
Experiencia
</h2> ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "projects" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl font-bold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "Code", $$Code, { "class": "size-12" })}
Proyectos Tecnológicos
</h2> ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "skills" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl md:text-4xl font-bold mb-[60px] mt-[30px] flex gap-x-3 items-center"> ${renderComponent($$result3, "Pill", $$Pill, { "class": "size-6 " })}
Destrezas Adquiridas
</h2> <nav class="flex gap-3 mt-6 mb-12 flex-wrap justify-center"> ${renderComponent($$result3, "Skills", $$Skills, {})} </nav> ` })} </main> ` })}`;
}, "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/pages/index(old).astro", void 0);

const $$file = "/Users/javaair/mePROJECTS/AstroProjects/portfolio-dev/src/pages/index(old).astro";
const $$url = "/index(old)";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Indexold,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
