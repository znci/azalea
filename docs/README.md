# Introduction
A quick introduction to azalea and how to use it.

# How to use
Add this stylesheet `<link>` into the `<head>` before all other links of your HTML document to load azalea.

```<link rel="stylesheet" href="https://azalea.znci.dev/css/index.css">```

# Main Colors

The main colors we use for azalea are as followed and subject to change.

- Primary: `#0275d8` ![Primary](./assets/main_colors_primary.png)
- Secondary: `#72757e` ![Secondary](./assets/main_colors_secondary.png)
- Success: `#24913d` ![Success](./assets/main_colors_success.png)
- Danger: `#ca0014` ![Danger](./assets/main_colors_danger.png)
- Warning: `#e27611` ![Warning](./assets/main_colors_warning.png)
- Info: `#1cacc5` ![Info](./assets/main_colors_info.png)
- Light: `#a5a5a5` ![Light](./assets/main_colors_light.png)
- Dark: `#414141` ![Dark](./assets/main_colors_dark.png)

# Starting Template
>  **Warning**
>  This template is unfinished and will eventually contain all elements of azalea's functionality.
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Azalea Template</title>
	<link rel="stylesheet" href="./css/index.css">
</head>
<body>
	<!-- Colours -->
	<h2>Colours</h2>
		<span class="text-primary">primary text</span> |
		<span class="text-secondary">secondary text</span> |
		<span class="text-blue">blue text</span> |
		<span class="text-red">red text</span> |
		<span class="text-yellow">yellow text</span> |
		<span class="text-green">green text</span> |
		<span class="text-orange">orange text</span> |
		<span class="text-purple">purple text</span> |
		<span class="text-gray">gray text</span> |
		<span class="text-error">error text</span> |
		<span class="text-info">info text</span> |
	
	<br><br>

		<span class="bg-primary text-white">primary bg</span> |
		<span class="bg-secondary text-white">secondary bg</span> |
		<span class="bg-blue text-white">blue bg</span> |
		<span class="bg-red text-white">red bg</span> |
		<span class="bg-yellow text-white">yellow bg</span> |
		<span class="bg-green text-white">green bg</span> |
		<span class="bg-orange text-white">orange bg</span> |
		<span class="bg-purple text-white">purple bg</span> |
		<span class="bg-gray text-white">gray bg</span> |
		<span class="bg-error text-white">error bg</span> |
		<span class="bg-info text-white">info bg</span> |

		<br><br>

		<span class="bg-primary-dark-8 text-white">primary dark 8</span> |
		<span class="bg-primary-dark-6 text-white">primary dark 6</span> |
		<span class="bg-primary-dark-4 text-white">primary dark 4</span> |
		<span class="bg-primary-dark-2 text-white">primary dark 2</span> |
		<span class="bg-primary text-white">primary</span> |
		<span class="bg-primary-light-2 text-white">primary light 2</span> |
		<span class="bg-primary-light-4 text-white">primary light 4</span> |
		<span class="bg-primary-light-6 text-white">primary light 6</span> |
		<span class="bg-primary-light-8 text-black">primary light 8</span> |
		<br><br>
	
			<span class="bg-primary-dark-8 text-white text-hover-primary">primary hover</span> |

	<!-- Font Sizes -->

	<!-- Buttons -->
	<h2>Buttons</h2>
		<a href="#" class="btn">default button</a>
		<a href="#" class="btn-primary text-white">click me</a>
		<a href="#" class="btn-secondary text-white">click me</a>
		<a href="#" class="btn-error text-white">click me</a>
		<a href="#" class="btn-orange text-white">click me</a>
		<a href="#" class="btn-outlined-purple text-purple text-hover-white">click me</a>
		<a href="#" class="btn-outlined-orange text-orange text-hover-white">click me</a>
	<!-- Cards -->
	<h2>Cards</h2>
	<div class="card">
		<div class="card-title">
			This is a test card title.
		</div>
		<p class="card-content">
			Lorem ipsum dolor sit amet consectetur adipisicing <a href="#">elit</a>. Ad, eveniet. Quaerat, modi voluptatum harum vel esse eius, laboriosam dolorem quisquam corrupti dolores ab officia dolore.
		</p>
	</div>
	<!-- Tooltips -->
	<h2>Tooltips</h2>
	<div class="tooltip">
		Hover over me!
		<div class="ttp-text">
			Lorem, ipsum dolor.
		</div>
	</div>
	<!-- Grid System -->

	<!-- Alerts -->

	<h2>Alerts</h2>
	<div class="alert alert-primary">
		This is a primary alert.
	</div>
	<div class="alert alert-secondary">
		This is a secondary alert.
	</div>
	<div class="alert alert-success">
		This is a success alert.
	</div>
	<div class="alert alert-danger">
		This is a danger alert.
	</div>
	<div class="alert alert-warning">
		This is a warning alert.
	</div>
	<div class="alert alert-info">
		This is a info alert.
	</div>
	<div class="alert alert-light">
		This is a light alert.
	</div>
	<div class="alert alert-dark">
		This is a dark alert.
	</div>
	<div class="alert alert-primary-fade">
		This is a fading primary alert.
	</div>

	<!-- Badges -->

	<h2>Badges</h2>
	<div class="badge badge-primary">Primary</div>
	<div class="badge badge-secondary">Secondary</div>
	<div class="badge badge-success">Success</div>
	<div class="badge badge-danger">Danger</div>
	<div class="badge badge-warning">Warning</div>
	<div class="badge badge-info">Info</div>
	<div class="badge badge-light">Light</div>
	<div class="badge badge-dark">Dark</div>

	<!-- Progress Bars -->

	<h2>Progress Bars</h2>

	<div class="progress">
		<div class="progress-bar bg-red" style="width: 50%;"></div>
	</div>

	<h2>Main Colors</h2>

	<div style="width: 48px; height: 48px;" class="bg-primary"></div>
	<div style="width: 48px; height: 48px;" class="bg-secondary"></div>
	<div style="width: 48px; height: 48px;" class="bg-success"></div>
	<div style="width: 48px; height: 48px;" class="bg-danger"></div>
	<div style="width: 48px; height: 48px;" class="bg-warning"></div>
	<div style="width: 48px; height: 48px;" class="bg-info"></div>
	<div style="width: 48px; height: 48px;" class="bg-light"></div>
	<div style="width: 48px; height: 48px;" class="bg-dark"></div>
</body>
</html>
```