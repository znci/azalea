# Tooltips

Progress bars are an easy way to get custom bars for types of progress.

## Example

Progress bars are availible in any color used in azalea, like inputs. They are accessed using the class `.progress`. To create the actual bar, you must use a class of `.progress-bar` within the `.progress` class.

You should have a result that looks something like this:

```
	<div class="progress">
		<div class="progress-bar"></div>
	</div>
```

You can then give the progress bar a custom color and width, and in this example we used red.

```
	<div class="progress">
		<div class="progress-bar bg-red" style="width: 50%;"></div>
	</div>
```

What this looks like in action:

![Progress Components](../assets/progress_component.png)
