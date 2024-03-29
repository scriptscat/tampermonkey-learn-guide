import React, { useState } from "react";
import Swal from "sweetalert2";
import useIsBrowser from "@docusaurus/useIsBrowser";

import styles from "./SweetAlert.module.css";

const searchList = [
  "?base",
  "?icon",
  "?footer",
  "?long",
  "?html",
  "?threeBtn",
  "?animate",
  "?mixin",
  "?image",
  "?hooks",
  "?ajax",
];

export default function sweetalert2Demo() {
  const isBrowser = useIsBrowser();
  const positionOptions = ["top", "center", "bottom"].flatMap((a) => [
    a + "-start",
    a,
    a + "-end",
  ]);

  if (!isBrowser) return null;
  if (!location.search || !searchList.includes(location.search))
    return (
      <span>
        请访问
        <a href="/实用知识库/引用库使用/SweetAlert2实现对话框/">
          【SweetAlert2实现对话框】
        </a>
        以查看更多内容
      </span>
    );
  document.body.parentElement.removeAttribute("data-theme");

  const handleClick = () => {
    switch (location.search) {
      case "?base":
        Swal.fire("Any fool can use a computer");
        break;
      case "?icon":
        Swal.fire("The Internet?", "That thing is still around?", "question");
        break;
      case "?footer":
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="javascript:void 0">Why do I have this issue?</a>',
        });
        break;
      case "?long":
        Swal.fire({
          imageUrl: "https://placeholder.pics/svg/300x1500",
          imageHeight: 1500,
          imageAlt: "A tall image",
        });
        break;
      case "?html":
        Swal.fire({
          title: "<strong>HTML <u>example</u></strong>", // 标题
          icon: "info", // 图标
          html:
            "You can use <b>bold text</b>, " +
            '<a href="//sweetalert2.github.io">links</a> ' +
            "and other HTML tags", // 下标题样式，html格式
          showCloseButton: true, // 显示关闭按钮
          showCancelButton: true, // 显示取消按钮
          focusConfirm: false, // 聚焦元素，如果为false则不默认聚焦确定按钮
          confirmButtonText:
            '<span><svg style="height:16px;margin-bottom:-2px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/></svg> Great!</span>', // 使用该参数设置确认按钮的文本
          confirmButtonAriaLabel: "Thumbs up, great!", // 用于设置标签描述
          cancelButtonText:
            '<svg style="height:16px;margin-bottom:-2px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"/></svg>', // 使用该参数设置取消按钮的文本
          cancelButtonAriaLabel: "Thumbs down", // 用于设置取消标签的描述
        });
        break;
      case "?threeBtn":
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
        break;
      case "?animate":
        Swal.fire({
          title: "Custom animation with Animate.css",
          showClass: {
            popup: styles.animate__animated + " " + styles.animate__fadeInDown,
          },
          hideClass: {
            popup: styles.animate__animated + " " + styles.animate__fadeOutUp,
          },
        });
        break;
      case "?mixin":
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        break;
      case "?image":
        Swal.fire({
          title: "Sweet!",
          text: "Modal with a custom image.",
          imageUrl: "https://unsplash.it/400/200",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        break;
      case "?hooks":
        let timerInterval;
        Swal.fire({
          title: "Auto close alert!",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true, // 底部出现对话框的进度条
          // 声明周期钩子，在弹出对话框后异步运行，并传入弹出的dom元素
          didOpen: () => {
            // 显示一个进度组件
            Swal.showLoading();
            // 获取呈现html/text的dom元素
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              // 返回进度条剩余的时间
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          // 生命周期钩子，当窗口关闭时同步运行，提供弹出的dom元素作为函数的参数
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        break;
      case "?ajax":
        Swal.fire({
          title: "Submit your Github username",
          input: "text", // 设置一个input的编辑框
          // 设置input属性
          inputAttributes: {
            autocapitalize: "off", // 设置为off的时候取消首字母大写
          },
          showCancelButton: true,
          confirmButtonText: "Look up",
          showLoaderOnConfirm: true, // 当为loading的时候取消confirm按钮并显示加载组件
          // 在执行confirm按钮之前执行该函数
          // 如果返回false为阻止弹窗关闭，undefined为默认结果
          // 也可以返回其他值
          // 可以通过result.value获取对应的值
          preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(response.statusText);
                }
                return response.json();
              })
              .catch((error) => {
                Swal.showValidationMessage(`Request failed: ${error}`);
              });
          },
          // 如果设置为false则不允许点击对话框以外的背景来关闭对话框
          allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: `${result.value.login}'s avatar`,
              imageUrl: result.value.avatar_url,
            });
          }
        });
        break;
    }
  };
  setTimeout(handleClick, 50);
  return (
    <>
      {location.search === "?position" && (
        <div className={styles.gridBox}>
          {positionOptions.map((a) => (
            <button
              style={{
                fontSize: "20px",
              }}
              key={a}
              onClick={() =>
                Swal.fire({
                  position: a, // 属性 'top' , 'top-start' , 'top-end' , 'center' , 'center-start' , 'center-end' , 'bottom' , 'bottom-start' , 'bottom-end' .
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500, // 消失时间
                })
              }
            >
              {a}
            </button>
          ))}
        </div>
      )}
      {location.search !== "?position" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <button
            onClick={handleClick}
            style={{
              fontSize: "20px",
            }}
          >
            弹出窗口
          </button>
        </div>
      )}
    </>
  );
}
