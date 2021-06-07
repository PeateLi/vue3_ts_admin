<template>
  <div class="video_container">
    <video
      src="@/assets/video/login_background.mp4"
      autoplay="autoplay"
      muted
      loop
    ></video>
  </div>

  <div class="page-login">
    <div class="page_login_content_header">时间是一切财富中最宝贵的财富</div>
    <h2>Blog And ErrorLog Admin</h2>
    <div class="page_login_content_container">
      <div class="page_login_content_form">
        <el-card>
          <el-form
            ref="form"
            :rules="rules"
            :model="rulesForm"
            label-width="0px"
          >
            <el-form-item prop="userName">
              <el-input
                placeholder="请输入用户名"
                clearable
                v-model="rulesForm.userName"
              >
                <template #prepend>
                  <i class="el-icon-user-solid"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="passWord">
              <el-input
                placeholder="请输入密码"
                show-password
                v-model="rulesForm.passWord"
              >
                <template #prepend>
                  <i class="el-icon-warning-outline"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="authCode">
              <el-input placeholder="请输入验证码" v-model="rulesForm.authCode">
                <template #append>
                  {{ getCodaData }}
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                style="width: 100%"
                @click="submitForm('form')"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getCode, login } from "../api/user";
interface userParams {
  userName: string;
  passWord: string;
  authCode: string;
}
interface userRuler {
  userName: Array<rulerType>;
  passWord: Array<rulerType>;
  authCode: Array<rulerType>;
}
interface rulerType {
  required?: boolean;
  message: string;
  trigger: string;
  min?: number;
  max?: number;
}
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import {
  defineComponent,
  reactive,
  onMounted,
  ref,
  getCurrentInstance,
} from "vue";
export default defineComponent({
  setup() {
    const router = useRouter();
    const { ctx } = getCurrentInstance() as any;
    const store = useStore();
    const rulesForm: userParams = reactive({
      userName: "",
      passWord: "",
      authCode: "",
    });
    let getCodaData = ref<number | null>(null);
    const rules: userRuler = reactive({
      userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      passWord: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 6, message: "密码长度必须在6个字符", trigger: "blur" },
      ],
      authCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
    });
    const getAutoCode = async function () {
      let { data } = await getCode();
      getCodaData.value = data;
    };
    onMounted(() => {
      getAutoCode();
    });
    const submitForm = (formName: string) => {
      ctx.$refs[formName].validate((valid: any) => {
        if (valid) {
          login({
            username: rulesForm.userName,
            password: rulesForm.passWord,
            code: rulesForm.authCode,
          }).then((res: any) => {
            if (res.data.state === "1") {
              ElMessage.success({
                message: "登录成功！",
                type: "success",
              });
              store.dispatch("setUserInfo", res.data);
              router.push("/");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };
    return {
      rulesForm,
      rules,
      getCodaData,
      submitForm,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-login {
  display: flex;
  flex-direction: column;
  position: relative; /*脱离文档流*/
  top: 50%; /*偏移*/
  transform: translate(0, -50%);
  h2 {
    text-align: center;
    color: #606266;
    margin-top: 0px;
  }
}
.page_login_content_header {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 12px;
  color: #606266;
}
.page_login_content_container {
  .page_login_content_form {
    width: 280px;
    margin: 0px auto;
  }
}
.video_container {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: -99;
  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
