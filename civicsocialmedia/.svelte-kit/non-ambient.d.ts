
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/archetypes" | "/begijpen" | "/begijpen/[slug]" | "/begijpen/[slug]/step2" | "/begrijpen" | "/begrijpen/step1" | "/begrijpen/step2" | "/begrijpen/step3" | "/begrijpen/[slug]" | "/cyberpunk" | "/evalueren" | "/evalueren/[slug]" | "/ontwerpprincipes" | "/roadmap" | "/toolkit" | "/toolkit/[slug]";
		RouteParams(): {
			"/begijpen/[slug]": { slug: string };
			"/begijpen/[slug]/step2": { slug: string };
			"/begrijpen/[slug]": { slug: string };
			"/evalueren/[slug]": { slug: string };
			"/toolkit/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/archetypes": Record<string, never>;
			"/begijpen": { slug?: string };
			"/begijpen/[slug]": { slug: string };
			"/begijpen/[slug]/step2": { slug: string };
			"/begrijpen": { slug?: string };
			"/begrijpen/step1": Record<string, never>;
			"/begrijpen/step2": Record<string, never>;
			"/begrijpen/step3": Record<string, never>;
			"/begrijpen/[slug]": { slug: string };
			"/cyberpunk": Record<string, never>;
			"/evalueren": { slug?: string };
			"/evalueren/[slug]": { slug: string };
			"/ontwerpprincipes": Record<string, never>;
			"/roadmap": Record<string, never>;
			"/toolkit": { slug?: string };
			"/toolkit/[slug]": { slug: string }
		};
		Pathname(): "/" | "/archetypes" | "/archetypes/" | "/begijpen" | "/begijpen/" | `/begijpen/${string}` & {} | `/begijpen/${string}/` & {} | `/begijpen/${string}/step2` & {} | `/begijpen/${string}/step2/` & {} | "/begrijpen" | "/begrijpen/" | "/begrijpen/step1" | "/begrijpen/step1/" | "/begrijpen/step2" | "/begrijpen/step2/" | "/begrijpen/step3" | "/begrijpen/step3/" | `/begrijpen/${string}` & {} | `/begrijpen/${string}/` & {} | "/cyberpunk" | "/cyberpunk/" | "/evalueren" | "/evalueren/" | `/evalueren/${string}` & {} | `/evalueren/${string}/` & {} | "/ontwerpprincipes" | "/ontwerpprincipes/" | "/roadmap" | "/roadmap/" | "/toolkit" | "/toolkit/" | `/toolkit/${string}` & {} | `/toolkit/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/fonts/Cabin/Cabin-Bold.ttf" | "/fonts/Cabin/Cabin-BoldItalic.ttf" | "/fonts/Cabin/Cabin-Italic.ttf" | "/fonts/Cabin/Cabin-Medium.ttf" | "/fonts/Cabin/Cabin-MediumItalic.ttf" | "/fonts/Cabin/Cabin-Regular.ttf" | "/fonts/Cabin/Cabin-SemiBold.ttf" | "/fonts/Cabin/Cabin-SemiBoldItalic.ttf" | "/fonts/Cabin/Cabin_Condensed-Bold.ttf" | "/fonts/Cabin/Cabin_Condensed-BoldItalic.ttf" | "/fonts/Cabin/Cabin_Condensed-Italic.ttf" | "/fonts/Cabin/Cabin_Condensed-Medium.ttf" | "/fonts/Cabin/Cabin_Condensed-MediumItalic.ttf" | "/fonts/Cabin/Cabin_Condensed-Regular.ttf" | "/fonts/Cabin/Cabin_Condensed-SemiBold.ttf" | "/fonts/Cabin/Cabin_Condensed-SemiBoldItalic.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-Bold.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-BoldItalic.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-Italic.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-Medium.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-MediumItalic.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-Regular.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-SemiBold.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-SemiBoldItalic.ttf" | "/fonts/Geomanist/Geomanist-Regular-Italic.woff" | "/fonts/Geomanist/Geomanist-Regular.woff" | "/fonts/Geomanist/generator_config.txt" | "/fonts/Geomanist/geomanist-regular-demo.html" | "/fonts/Geomanist/geomanist-regular-webfont.eot" | "/fonts/Geomanist/geomanist-regular-webfont.svg" | "/fonts/Geomanist/geomanist-regular-webfont.ttf" | "/fonts/Geomanist/geomanist-regular-webfont.woff" | "/fonts/Geomanist/geomanist-regular-webfont.woff2" | "/fonts/Geomanist/specimen_files/grid_12-825-55-15.css" | "/fonts/Geomanist/specimen_files/specimen_stylesheet.css" | "/fonts/Geomanist/stylesheet.css" | "/robots.txt" | string & {};
	}
}