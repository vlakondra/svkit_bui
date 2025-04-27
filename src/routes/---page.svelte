<script lang="ts">
    //https://www.sveltesociety.dev/packages#design-systems
    import { Accordion } from "bits-ui";
    import CaretDown from "phosphor-svelte/lib/CaretDown";
    import { AlertDialog } from "bits-ui";
    import Monaco from 'svelte-monaco';
    import {Button} from "../ui/button";


let value =$state( 'const x = 5');

   
    const items = [
      {
        value: "1",
        title: "What is the meaning of life?",
        content:
          "To become a better person, to help others, and to leave the world a better place than you found it."
      },
      {
        value: "2",
        title: "How do I become a better person?",
        content:
          "Read books, listen to podcasts, and surround yourself with people who inspire you."
      },
      {
        value: "3",
        title: "What is the best way to help others?",
        content: "Give them your time, attention, and love."
      }
    ];
    function onchange(e){
        console.log(value)
        lang = e.target.value
    }
     let lang = $state('typescript')
  
  </script>
   
<Button variant='secondary'>BBB2</Button>

  <Accordion.Root class="w-full sm:max-w-[70%] font-sans" type="multiple">
    {#each items as item (item.value)}
      <Accordion.Item
        value={item.value}
        class="border-dark-10 group border-b px-1.5"
      >
        <Accordion.Header>
          <Accordion.Trigger
            class="flex w-full flex-1 select-none items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180"
          >
            <span class="w-full text-left">
              {item.title}
            </span>
            <span
              class="hover:bg-dark-10 inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent"
            >
              <CaretDown class="size-[18px] transition-transform duration-200" />
            </span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content
          class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm tracking-[-0.01em]"
        >
          <div class="pb-[25px]">
            {item.content}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>

<!-- xx -->


   
  <AlertDialog.Root>
    <AlertDialog.Trigger
      class="rounded-input bg-dark text-background
      shadow-mini hover:bg-dark/95 inline-flex h-12 select-none
      items-center justify-center whitespace-nowrap px-[21px] text-[15px] font-semibold transition-all active:scale-[0.98]"
    >
      Subscribe
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay
        class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
      />
      <AlertDialog.Content
        class="rounded-card-lg bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 outline-hidden fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 border p-7 sm:max-w-lg md:w-full "
      >
        <div class="flex flex-col gap-4 pb-6">
          <AlertDialog.Title class="text-lg font-semibold tracking-tight">
            Confirm your transaction
          </AlertDialog.Title>
          <AlertDialog.Description class="text-foreground-alt text-sm">
            This action cannot be undone. This will initiate a monthly wire in the
            amount of $10,000 to Huntabyte. Do you wish to continue?
          </AlertDialog.Description>
        </div>
        <div class="flex w-full items-center justify-center gap-2">
          <AlertDialog.Cancel
            class="h-input rounded-input bg-muted shadow-mini hover:bg-dark-10 focus-visible:ring-foreground focus-visible:ring-offset-background focus-visible:outline-hidden inline-flex w-full items-center justify-center text-[15px] font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            Cancel
          </AlertDialog.Cancel>
          <AlertDialog.Action
            class="h-input rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 focus-visible:ring-dark focus-visible:ring-offset-background focus-visible:outline-hidden inline-flex w-full items-center justify-center text-[15px] font-semibold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            Continue
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>


<div>
    <select onchange={onchange}>
    <option value="python">Python</option>
    <option value="typescript">Typescript</option>
</select></div>

  <div id="editor" style='height:300px;width:300px;'>
	<Monaco
		options={{ language: lang, 
            automaticLayout: true,
            fontSize:26,}}
		theme="vs-dark"
     	on:ready={(event) => console.log(event.detail)}
		bind:value
	/>
</div>

<textarea bind:value={value} ></textarea>   


  <style>
    *{
        font-family: sans-serif;
    }
  </style>