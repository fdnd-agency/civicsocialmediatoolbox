
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
		RouteId(): "/" | "/archetypes" | "/begijpen" | "/begijpen/step1" | "/begijpen/step2" | "/begijpen/step3" | "/begijpen/[slug]" | "/evalueren" | "/evalueren/[slug]" | "/ontwerpprincpies" | "/ontwerpprincpies/[slug]" | "/roadmap" | "/toolkit" | "/toolkit/[slug]";
		RouteParams(): {
			"/begijpen/[slug]": { slug: string };
			"/evalueren/[slug]": { slug: string };
			"/ontwerpprincpies/[slug]": { slug: string };
			"/toolkit/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/archetypes": Record<string, never>;
			"/begijpen": { slug?: string };
			"/begijpen/step1": Record<string, never>;
			"/begijpen/step2": Record<string, never>;
			"/begijpen/step3": Record<string, never>;
			"/begijpen/[slug]": { slug: string };
			"/evalueren": { slug?: string };
			"/evalueren/[slug]": { slug: string };
			"/ontwerpprincpies": { slug?: string };
			"/ontwerpprincpies/[slug]": { slug: string };
			"/roadmap": Record<string, never>;
			"/toolkit": { slug?: string };
			"/toolkit/[slug]": { slug: string }
		};
		Pathname(): "/" | "/archetypes" | "/archetypes/" | "/begijpen" | "/begijpen/" | "/begijpen/step1" | "/begijpen/step1/" | "/begijpen/step2" | "/begijpen/step2/" | "/begijpen/step3" | "/begijpen/step3/" | `/begijpen/${string}` & {} | `/begijpen/${string}/` & {} | "/evalueren" | "/evalueren/" | `/evalueren/${string}` & {} | `/evalueren/${string}/` & {} | "/ontwerpprincpies" | "/ontwerpprincpies/" | `/ontwerpprincpies/${string}` & {} | `/ontwerpprincpies/${string}/` & {} | "/roadmap" | "/roadmap/" | "/toolkit" | "/toolkit/" | `/toolkit/${string}` & {} | `/toolkit/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/fonts/Cabin/Cabin-Bold.ttf" | "/fonts/Cabin/Cabin-BoldItalic.ttf" | "/fonts/Cabin/Cabin-Italic.ttf" | "/fonts/Cabin/Cabin-Medium.ttf" | "/fonts/Cabin/Cabin-MediumItalic.ttf" | "/fonts/Cabin/Cabin-Regular.ttf" | "/fonts/Cabin/Cabin-SemiBold.ttf" | "/fonts/Cabin/Cabin-SemiBoldItalic.ttf" | "/fonts/Cabin/Cabin_Condensed-Bold.ttf" | "/fonts/Cabin/Cabin_Condensed-BoldItalic.ttf" | "/fonts/Cabin/Cabin_Condensed-Italic.ttf" | "/fonts/Cabin/Cabin_Condensed-Medium.ttf" | "/fonts/Cabin/Cabin_Condensed-MediumItalic.ttf" | "/fonts/Cabin/Cabin_Condensed-Regular.ttf" | "/fonts/Cabin/Cabin_Condensed-SemiBold.ttf" | "/fonts/Cabin/Cabin_Condensed-SemiBoldItalic.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-Bold.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-BoldItalic.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-Italic.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-Medium.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-MediumItalic.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-Regular.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-SemiBold.ttf" | "/fonts/Cabin/Cabin_SemiCondensed-SemiBoldItalic.ttf" | "/fonts/Geomanist/generator_config.txt" | "/fonts/Geomanist/geomanist-regular-demo.html" | "/fonts/Geomanist/Geomanist-Regular-Italic.woff" | "/fonts/Geomanist/geomanist-regular-webfont.eot" | "/fonts/Geomanist/geomanist-regular-webfont.svg" | "/fonts/Geomanist/geomanist-regular-webfont.ttf" | "/fonts/Geomanist/geomanist-regular-webfont.woff" | "/fonts/Geomanist/geomanist-regular-webfont.woff2" | "/fonts/Geomanist/Geomanist-Regular.woff" | "/fonts/Geomanist/specimen_files/grid_12-825-55-15.css" | "/fonts/Geomanist/specimen_files/specimen_stylesheet.css" | "/fonts/Geomanist/stylesheet.css" | "/robots.txt" | string & {};
	}
}