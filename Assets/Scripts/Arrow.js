#pragma strict

public var speed : Vector2 = new Vector2(50,50);
public var arrow : GameObject;
public var power : float;
private var movement : Vector2;

function Start () {

}

function Update () {
	arrow = GameObject.Find("Arrow");
	

	var isDown = Input.GetKeyDown(KeyCode.Space);

	if (Input.GetButton("Fire1")) {
		print(Time.frameCount);
	}
	// FAIRE COEFF DE DÉCÉLERATION + ÉQUATION DE LA COURBE EN FONCTION DU TEMPS.
}
