import axiosClient from "./axiosClient";

const roomAPI = {
	getMessageByRoomId: (roomId) => {
		const url = `/api/chat/messages/${roomId}`;
		return axiosClient.get(url);
	},
   addMessage: (body) => {
		const url = '/api/chat/messages';
		return axiosClient.post(url, body);
	},
   getAllRoom: () => {
      const url = '/api/chat/rooms';
      return axiosClient.get(url)
   }
}

export default roomAPI