import Vue from 'vue'
import Vuex from 'vuex'
import authStore from './auth'
import { vote, getVote, getResult } from '../services/vote'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        id: 1,
        name: 'E-Arena',
        desc: 'E-Arena là nền tảng học tập, thi đấu trực tuyến đa người dùng, tương tác 2 chiều giữa người dạy và người học. Người tham gia có thể thi đấu để cùng trả lời các câu hỏi kiến thức thông qua hình thức trò chơi thú vị, hoặc cùng nhau tham các khóa học, rèn luyện cùng nhau. Lên lịch thi đấu, học tập phù hợp theo sở thích của mình.',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987060/UNIHACK/krmgldg2fnzhfudidk1i.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657986376/UNIHACK/njc9idcupeasetdupkgv.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1658024493/UNIHACK/pdk2qfjmfyomluq1nvg0.png'
      },
      {
        id: 2,
        name: 'The Heirs',
        desc: 'Là một nền tảng Web app số hóa những mô hình 3D và cho phép người dùng tương tác với những mô hình 3D đó.',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987061/UNIHACK/fgs0rbfigur5spfh6dqz.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657991562/UNIHACK/bygpya0ymc0cifvha2ac.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1658024494/UNIHACK/zrxfygv0iqhhr3xaxpmn.png'
      },
      {
        id: 3,
        name: 'Lazinators',
        desc: 'Ứng dụng học theo nhu cầu Learn on Demand (LonDe). Sử dụng AI để tạo một lộ trình học dựa trên mong muốn của người học. Người dùng chỉ cần trả chi phí cho những gì đã học.',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987060/UNIHACK/epevdojepucdyrov2yyy.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657991564/UNIHACK/tt0vxcfm3sc38og7ukkg.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1658024494/UNIHACK/mjzhdj5oxio4wcxyzzqt.png'
      },
      {
        id: 4,
        name: 'WIN2WIN',
        desc: 'Ứng dụng quản lý chất lượng dạy học thông qua việc sử dụng AI để ghi nhận cử chỉ của học viên.',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987060/UNIHACK/kz3t3zn2ogfwkj9jaxtb.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657991562/UNIHACK/dno1a6edpindovwl3htt.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1658024493/UNIHACK/eiblfrbr38zivqan9j54.png'
      },

      {
        id: 5,
        name: 'Gì cũng được',
        desc: 'Dự án xây dựng phần mềm giúp mọi người có nhu cầu học tập, làm việc có thể tìm đến nhau, tại một vị trí cụ thể nào đó ngồi lại với nhau và cùng nhau trao đổi về vấn đề của mình.',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987060/UNIHACK/ko7kiszzeckkadylx8z7.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657991561/UNIHACK/vs3uaop3zrxb78iuqbis.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1658024501/UNIHACK/zhus5p7lyqgjn6i3el0i.png'
      },
      {
        id: 6,
        name: 'Enouva',
        desc: 'Nền tảng hỗ trợ phụ huynh đánh giá, đề xuất giải pháp và cách thức giáo dục trẻ gặp vấn đề chậm nói, chậm phát triển và tự kỷ.',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987060/UNIHACK/iitvljjv7pofmwdfjscn.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657991560/UNIHACK/deybieoej2zvx17cypcw.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1658024494/UNIHACK/risglf1zueedhphismnu.png'
      },
      {
        id: 7,
        name: 'Mindev Studio',
        desc: 'Là một Ứng dụng AI đưa ra đánh giá phù hợp về năng lực của học sinh từ đó định hướng nghề nghiệp, giảm áp lực của học sinh để ôn luyện đúng với trình độ và nguyện vọng mong muốn, tạo một cộng đồng học tập thân thiện cho học sinh',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987062/UNIHACK/d3cxbg1fl04hmbwca1tt.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657992573/UNIHACK/uzjrpofjzmliyfif6xlt.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657989729/UNIHACK/c7iym1ie9mfb2igg2mlm.png'
      },
      {
        id: 8,
        name: 'Eduverse',
        desc: 'Eduverse mang trải nghiệm lớp học ảo đến học sinh, giảng viên K12. Học sinh và giáo viên tương tác với nhau qua các hoạt động học và chơi trên ABC World. Giảng viên xây dựng các lớp học ảo với các mô hình mô phỏng cho các bài học, môn học.',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987062/UNIHACK/uk7v4ddnpmuqroixuwwh.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657993757/UNIHACK/u7u9sbxtniuasihib9m2.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657989729/UNIHACK/c7iym1ie9mfb2igg2mlm.png'
      },
      {
        id: 9,
        name: 'Smart-E',
        desc: 'Tạo ra một mô hình học tập hoàn toàn mới trong một thế giới 3D, giúp cho người dùng có thể chủ động hơn trong việc học tập, tự lập và sáng tạo hơn. Tích lũy được nhiều kiến thức cả về chuyên môn và kiến thức xã hội. Kết hợp nhuần nhuyễn giữa Học và Chơi.',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987060/UNIHACK/loyqow8qcqin4dbhwl4o.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657996255/UNIHACK/yx2xazvbhqyn11it1wrf.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657989729/UNIHACK/c7iym1ie9mfb2igg2mlm.png'
      },
      {
        id: 10,
        name: 'Green Go',
        desc: 'Dự án Miniousm là nền tảng cung cấp môi trường học tập hiệu quả với công cụ đề xuất lộ trình học, kết nối bạn đồng hành và không gian học giành cho các bạn sinh viên gặp vấn đề trong tiếp thu và kiểm tra lại kiến thức tại trường đại học.',
        image: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657987062/UNIHACK/umjqsjybx0pnga1fsqfb.jpg',
        imageInfo: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657996260/UNIHACK/odebgduqva7mzc6g5tdb.png',
        imageInfoMobile: 'https://res.cloudinary.com/dz5pvwzm5/image/upload/v1657989729/UNIHACK/c7iym1ie9mfb2igg2mlm.png'
      }
    ],
    votedTeamId: null,
    result: null
  },
  mutations: {
    setVotedTeamId(state, votedTeamId) {
      state.votedTeamId = votedTeamId
    },
    resetVotedTeamId(state) {
      state.votedTeamId = null
    },
    setResult(state, result) {
      state.result = result
    }
  },
  actions: {
    vote({ commit }, payload) {
      const teamId = payload
      const userGgId = authStore.state.user.uid
      vote(userGgId, teamId)
        .then(() => {
          commit('setVotedTeamId', teamId)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getVote({ commit }) {
      const userGgId = authStore.state.user.uid
      getVote(userGgId)
        .then(votedTeamId => {
          commit('setVotedTeamId', votedTeamId)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getResult({ commit }) {
      return getResult()
        .then(result => {
          commit('setResult', result)
          return result
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
    authStore
  }
})
