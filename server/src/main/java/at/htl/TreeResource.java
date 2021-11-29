package at.htl;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("/tree")
@Produces(MediaType.APPLICATION_JSON)
public final class TreeResource {

    private static final Map<TreeType, List<Tree>> trees = getTrees();

    @GET
    @Path("/types")
    public Response getTreeTypes() {
        return Response
            .ok(TreeType.values())
            .build();
    }

    @GET
    @Path("{type}")
    public Response getTreesOfType(@PathParam("type") TreeType type) {
        return Response
            .ok(
                trees
                    .get(type)
                    .stream()
                    .map(Tree::getId)
                    .toList())
            .build();
    }

    private static Map<TreeType, List<Tree>> getTrees() {
        return new HashMap<>() {{
            put(TreeType.Blaufichte, List.of(
                new Tree(1, TreeType.Blaufichte, 1.8, BigDecimal.valueOf(17.99)),
                new Tree(2, TreeType.Blaufichte, 2.2, BigDecimal.valueOf(22.99)),
                new Tree(3, TreeType.Blaufichte, 2.8, BigDecimal.valueOf(26.49)),
                new Tree(4, TreeType.Blaufichte, 3.1, BigDecimal.valueOf(29.99))
            ));

            put(TreeType.Nordmanntanne, List.of(
                new Tree(5, TreeType.Nordmanntanne, 1.2, BigDecimal.valueOf(17.49)),
                new Tree(6, TreeType.Nordmanntanne, 1.45, BigDecimal.valueOf(25.49)),
                new Tree(7, TreeType.Nordmanntanne, 1.8, BigDecimal.valueOf(29.99)),
                new Tree(8, TreeType.Nordmanntanne, 1.85, BigDecimal.valueOf(31.00)),
                new Tree(9, TreeType.Nordmanntanne, 1.92, BigDecimal.valueOf(33.18)),
                new Tree(10, TreeType.Nordmanntanne, 2.2, BigDecimal.valueOf(36.99)),
                new Tree(11, TreeType.Nordmanntanne, 2.35, BigDecimal.valueOf(39.99)),
                new Tree(12, TreeType.Nordmanntanne, 2.6, BigDecimal.valueOf(43.49))
            ));
        }};
    }
}
