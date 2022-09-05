import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { VideoService } from "./video.service";
import { Auth } from "../auth/decorators/auth.decorator";
import { VideoDto } from "../video/video.dto";
import { CurrentUser } from "../user/user.decorator";

@Controller("video")
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get("get-private/:id")
  @Auth()
  async getVideoPrivate(@Param("id") id: string) {
    return this.videoService.byId(+id);
  }

  @Get()
  async getAll(@Query("searchTerm") searchTerm?: string) {
    return this.videoService.getAll(searchTerm);
  }

  @Get("most-popular")
  async getMostPopularByViews() {
    return this.videoService.getMostPopularViews();
  }

  @Get(":id")
  async getVideo(@Param("id") id: string) {
    return this.videoService.byId(+id);
  }

  @HttpCode(200)
  @Put()
  @Auth()
  async createVideo(@CurrentUser("id") id: number) {
    return this.videoService.create(id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(":id")
  @Auth()
  async updateVideo(@Param("id") id: string, @Body() dto: VideoDto) {
    return this.videoService.update(+id, dto);
  }

  @HttpCode(200)
  @Put(":id")
  @Auth()
  async deleteVideo(@Param("id") id: string) {
    return this.videoService.delete(+id);
  }

  @HttpCode(200)
  @Put("update-views/:videoId")
  async updateViews(@Param("videoId") videoId: string) {
    return this.videoService.updateCountViews(+videoId);
  }

  @HttpCode(200)
  @Put("update-likes/:videoId")
  async updateLikes(@Param("videoId") videoId: string) {
    return this.videoService.updateReaction(+videoId);
  }
}
