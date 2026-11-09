const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Behaviors.Rotate,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.AddInstanceVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.PickRandom,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random
	];
};
self.C3_JsPropNameTable = [
	{baground: 0},
	{"8Direction": 0},
	{BoundTo: 0},
	{roket: 0},
	{nyawa: 0},
	{Rotate: 0},
	{Bullet: 0},
	{meteor: 0},
	{laser: 0},
	{object: 0},
	{particel: 0},
	{Keyboard: 0},
	{Score: 0},
	{score: 0}
];

self.InstanceType = {
	baground: class extends self.ISpriteInstance {},
	roket: class extends self.ISpriteInstance {},
	meteor: class extends self.ISpriteInstance {},
	laser: class extends self.ISpriteInstance {},
	object: class extends self.ISpriteInstance {},
	particel: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	score: class extends self.ITextInstance {}
}