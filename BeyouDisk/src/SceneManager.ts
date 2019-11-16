class SceneManager {
	private static _instance: SceneManager;

	private root:eui.UILayer;
	private constructor() {
	}

	public static get instance() {
		if (this._instance == null) {
			this._instance = new SceneManager();
		}
		return this._instance;
	}

	public setRoot(root:eui.UILayer){
		this.root=root;
	}

//跳转到下一页面
	public addScene(scene:Scene){
		this.root.addChild(scene);
	}

//跳转到上一页面
	public removeScene(scene:Scene){
		this.root.removeChild(scene);
		scene=null;
	}
}