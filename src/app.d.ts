// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// In summary, this code is creating a module augmentation 
// for the @fortawesome/pro-solid-svg-icons/index.es module, 
// which re-exports all exports from the @fortawesome/pro-solid-svg-icons module.
// This allows TypeScript to recognize the types and exports 
// of the @fortawesome/pro-solid-svg-icons module 
// when importing from the @fortawesome/pro-solid-svg-icons/index.es module.

// В общем, этот код создает дополнение модуля
// для модуля @fortawesome/pro-solid-svg-icons/index.es,
// который реэкспортирует все экспорты из модуля @fortawesome/pro-solid-svg-icons.
// Это позволяет TypeScript распознавать типы и экспорты
// модуля @fortawesome/pro-solid-svg-icons
// при импорте из модуля @fortawesome/pro-solid-svg-icons/index.es.

declare module '@fortawesome/pro-solid-svg-icons/index.es' {
	export * from '@fortawesome/pro-solid-svg-icons';
  }


export {};
