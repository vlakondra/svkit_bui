<p>
	<a class="button" href="#modal">Кликни</a>
</p>

<div class='wrapp'>

<!--div id="modal" - это целевой фрагмент тега a.
К нему будет применен стиль с селектором #modal:target
в случае, если URL стрницы содержать #modal-->
<div id="modal" class="overlay">
	<a class="cancel" href="#"></a>
	<div class="card">
		<h2>Это заголовок</h2>
		<div class="content">
			<p>Это контент</p>
            <p><input type="text"></p>
		</div>
	</div>
</div>
</div>

<style>
	/* Перекроем окно. Сначала перекрытие не видно.
    Содержание д.б. отцентрировано */
	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

        align-content: center;
        justify-items: center;   

		visibility: hidden;
		opacity: 0;

        background: rgba(0, 0, 0, 0.5);
		transition: opacity 500ms;

	}

	/* класс применяется, если URL-страницы совпадет со значением
       атрибута id какого-либо тега  */
	#modal:target {
		visibility: visible;
		opacity: 1;
	}

	/* Максимально 
    увеличим пространство, занимаемое тегом а. В рез-те
    клик по этому тегу всегда будет срабатывать и URL будет
    меняться с #modal на #, что приведет к срабатыванию
    класса .overlay и перекрытие опять будет невидимо */
	.overlay .cancel {
		position: absolute;
        top: 0;
		bottom: 0;
		left: 0;
		right: 0; 
		cursor: default;
        background: rgba(0, 0, 255, 0.251);
	}
    /* содержание должно быть выведено из 
    абсолютного позиционирование */
    .card{
        position:relative; /*!!!*/
		z-index: 99;
    }

</style>
