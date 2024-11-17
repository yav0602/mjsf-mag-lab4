import ServiceProvider from "@/services"

export default {
  install: (app) => {
    app.config.globalProperties.$serviceProvider = new ServiceProvider()
  }
}
