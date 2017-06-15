using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreAngular.Models;

namespace AspNetCoreAngular.Controllers
{
    [Route("api/[controller]")]
    public class VideosController : Controller
    {
        //fake datastore
        public static List<Video> _videoDataStore = Enumerable.Range(1, 5).Select(index => new Video
        {
            Id = index,
            Title = $"Video {index}",
            Description = $"Desciption for Video {index}"
        }).ToList();

        public static int seed = 5;
        public VideosController()
        {
        }

        [HttpGet("")]
        public IEnumerable<Video> GetAllVideos()
        {
            return _videoDataStore;
        }

        [HttpDelete("{id}")]
        public bool DeleteVideo(int id)
        {
            int result = _videoDataStore.RemoveAll(x => x.Id == id);
            return result > 0;
        }

        [HttpGet("{id}")]
        public Video GetVideo(int id)
        {
            return _videoDataStore.SingleOrDefault(x => x.Id == id);
        }

        [HttpPut("{id}")]
        public bool UpdateVideo([FromBody] Video video)
        {
            Video dsVideo = _videoDataStore.SingleOrDefault(x => x.Id == video.Id);
            dsVideo.Title = video.Title;
            dsVideo.Description = video.Description;
            return true;
        }

        [HttpPost("")]
        public int CreateVideo([FromBody] Video video)
        {
            seed++;
            video.Id = seed;
            _videoDataStore.Add(video);
            return seed;
        }
    }
}
