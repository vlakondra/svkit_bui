<script lang='ts'>
	import Fa from 'svelte-fa';
	import { faFlag, faCaretDown, faStaffSnake } from '@fortawesome/free-solid-svg-icons';

    import { Toggle } from "melt/builders";
    import { Accordion, type AccordionItem } from "melt/builders";
	// import { Button } from '$lib';
	// import Root from '$lib/root.svelte';
	// import Label from '$lib/label.svelte';

    import {Button} from 'bits-ui'
    
    let btn: HTMLButtonElement | undefined =$state()

    function fref(){
        if (!btn) return;
        btn.dataset.side = 'evil'
        console.log('Button reference:', btn.dataset);
    }

///////////////


let value = $state(false)
const toggle = new Toggle({
  value: () => value,
  onValueChange: (v) => (value = v),
});



type Item = AccordionItem<{
  id: string;
  title: string;
  description: string;
}>;

const items: Item[] = [
  { id: "item-1", title: "What is it?", description: "Bla-Bla-"},
  { id: "item-2", title: "Can I customize it?", description: "Bla-Bla-Bla-Bla-"},
];

const accordion = new Accordion();


</script>

<button {...toggle.trigger}>
    {toggle.value ? "On" : "Off"}
  </button>


<Button.Root 
class="border-0 rounded-4xl bg-blue-600  hover:bg-amber-500 inline-flex
h-12 items-center justify-center px-[21px] text-[15px]
font-semibold active:scale-[1.38] active:transition-all" 
 onclick={()=>fref()}
 bind:ref ={btn}
 type='button'
>
   <h1> Click me</h1>
</Button.Root>

<div {...accordion.root}>
  {#each items as i}
    {@const item = accordion.getItem(i)}
    <h2 {...item.heading}>
      <button class="bg-amber-600 flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" {...item.trigger}>
        {item.item.title}
      </button>
    </h2>

    <div {...item.content} class='
    transition-all duration-900 ease-out
    opacity-0 max-h-0
     [&[data-state=open]]:opacity-100
     [&[data-state=open]]:max-h-[1000px]  
    text-sm
   text-slate-600 overflow-hidden 
     '>
      {item.item.description}
    </div>
  {/each}
</div>

<!-- [&[data-state=open]]:opacity-100 px-5 text-lg
[&[data-state=open]]:max-h-96 opacity-0 max-h-0 text-shadow-2xs -->




<style>
  .bl{
    opacity: 0;
  }
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
}
</style>
