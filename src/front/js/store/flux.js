const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			auth: false,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			signup: (email, password) => {
				fetch(process.env.BACKEND_URL + "/api/signup", {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({
							"email":email,
							"password": password
						})
				})
				.then((response) => response.json())
				.then((data) => console.log(data))
			},

			login: (email, password) => {
				console.log("login desde flux")
				const requestOptions = {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
							"email":email,
							"password": password
						})
				};
				fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
					.then(response => {
						console.log(response.status)
						if(response.status === 200){
							setStore({auth: true});
						}
						return response.json()
					})
					.then(data => {
						localStorage.setItem("token", data.access_token);
						console.log(data)
					});
			},

			logout: () => {
				setStore({auth: false})
				localStorage.removeItem("token");
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
