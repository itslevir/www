<header>
	<a href="/">
		<h1>Altude</h1>
	</a>
	<nav>
		<a href="/hireme">Hire me</a>
		<a href="/about">About</a>
	</nav>
</header>

<style>
	a {
		color: #fff;
		text-decoration: none;

		display: inline-block;
		position: relative;
	}
	a:after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		height: 2px;
		background: none repeat scroll 0 0 transparent;
		background: #fff;
		transition: width 0.3s ease 0s;
		width: 0;
	}

	a:hover:after {
		width: 100%;
		left: 0;
	}

	header {
		position: fixed;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	header nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 50%;
	}
</style>
